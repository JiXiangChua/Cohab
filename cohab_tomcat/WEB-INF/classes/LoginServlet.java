import java.util.*;
import javax.sql.DataSource;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import org.json.HTTP;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONArray;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, 
            HttpServletResponse response) 
            throws IOException, ServletException
    {
        StringBuffer jb = new StringBuffer();
        String line = null;
        try {
            BufferedReader reader = request.getReader();
            while ((line = reader.readLine()) != null)
              jb.append(line);
        } catch (Exception e) {
             throw new IOException("Error request string");
        }
        try {
            JSONObject jsonObject = new JSONObject(jb.toString());
            String email = jsonObject.getString("email");
            String password = jsonObject.getString("password");
            
            String loginReasult = login(email,password);

            JSONObject jObject = new JSONObject();
            
            if(!loginReasult.isEmpty()){
                switch (loginReasult) {
                    case "invalideEmail":
                        jObject.put("status", "invalideEmail");
                        break;
                    case "invalidePassword":
                        jObject.put("status", "invalidePassword");
                        break;
                    case "loginFailed":
                        jObject.put("status", "loginFailed");
                        break;
                    case "valideUser":
                        jObject.put("status", "OK");
                        JSONObject userObj = getUserInfo(email);
                        jObject.put("id", userObj.getString("id"));
                        jObject.put("username", userObj.getString("username"));
                        jObject.put("email", userObj.getString("email"));
                        break;
                    default:
                        response.sendRedirect(this.getServletContext().getContextPath());
                        break;
                }
            }

            System.out.println("---------------------------------------->"+jObject);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(jObject.toString());

        } catch (JSONException e) {
            // crash and burn
            throw new IOException("Error parsing JSON request string");
        }
    }

    public String login(String email, String password){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        String loginResult = "";
        
        try{
            String sqlCheckEmail = "SELECT * FROM user WHERE email = '"+ email +"'";
            String sqlCheckPassword = "SELECT * FROM user WHERE email = '"+ email +"' and password = MD5('"+password+"')";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlCheckEmail);
    
            if(resultset.next()){
                resultset = statement.executeQuery(sqlCheckPassword);
                if(resultset.next())
                    loginResult = "valideUser";
                else
                    loginResult="invalidePassword";
            }
            else
                loginResult = "invalideEmail";
        
        }catch(SQLException ex)
        {
            loginResult="loginFailed";
            System.err.println(ex.getMessage());     
        }finally{
            if(resultset !=null) 
                try {
                    resultset.close();
                } catch (SQLException ex) {
                    System.err.println(ex.getMessage());   
                }
        
            if(statement !=null)
                try {
                    statement.close();
                } catch (SQLException ex) {
                    System.err.println(ex.getMessage());   
                }
        
            if(connection !=null)
                try {
                    connection.close();
                } catch (SQLException ex) {
                    System.err.println(ex.getMessage());   
                }    
        }
        return loginResult;
    }

    public JSONObject getUserInfo(String email)
     {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONObject userObj = new JSONObject();

        try{
            String sqlGetCustomerInfo = "SELECT * FROM user WHERE email = '"+ email +"'";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetCustomerInfo);
    
            if(resultset.next()){
                userObj.put("id", resultset.getInt("id"));
                userObj.put("username", resultset.getString("username"));
                userObj.put("email", resultset.getString("email"));
            }
            else
                userObj = null;
        
        }catch(Exception ex)
        {
            userObj = null;
            System.err.println(ex.getMessage());     
        }finally{
            if(resultset !=null) 
                try {
                    resultset.close();
                } catch (Exception ex) {
                    System.err.println(ex.getMessage()); 
                }
        
            if(statement !=null)
                try {
                    statement.close();
                } catch (Exception ex) {
                    System.err.println(ex.getMessage()); 
                }
        
            if(connection !=null)
                try {
                    connection.close();
                } catch (Exception ex) {
                    System.err.println(ex.getMessage()); 
                }    
        }
        return userObj;
     }
}
