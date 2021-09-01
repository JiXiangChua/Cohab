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
import org.apache.commons.validator.routines.EmailValidator;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, 
            HttpServletResponse response) 
            throws IOException, ServletException{
                StringBuffer jb = new StringBuffer();
        String line = null;
        try {
            BufferedReader reader = request.getReader();
            while ((line = reader.readLine()) != null)
              jb.append(line);
        } catch (Exception e) {
             throw new IOException("Error request string");
        }try {
            JSONObject jsonObject = new JSONObject(jb.toString());
            String email = jsonObject.getString("email");
            String password = jsonObject.getString("password");
            String username = jsonObject.getString("username");
            String registrationStatus = "";
            
            JSONObject jObject = new JSONObject();

            EmailValidator validator = EmailValidator.getInstance();
            if (validator.isValid(email)) {
                registrationStatus = addUser(username, email, password);
            } else {
                jObject.put("status", "Sorry, invalid email !");
            }

            if(!registrationStatus.isEmpty()){
                switch (registrationStatus) {
                    case "Success":
                        jObject.put("status", "OK");
                        JSONObject userObj = getUserInfo(email);
                        jObject.put("id", userObj.getString("id"));
                        jObject.put("username", userObj.getString("username"));
                        jObject.put("email", userObj.getString("email"));
                        break;
                    case "Email":
                        jObject.put("status", "Sorry, the email has been registed before. Please check again.");
                        break;
                    case "Fail":
                        default:
                        jObject.put("status", "Sorry, here was some error happend. Please try again.");
                        break;
                }        
            }
            System.out.println("---------------------------------------->"+jObject);
                //System.out.println(json);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(jObject.toString());

            } catch (JSONException e) {
                // crash and burn
                throw new IOException("Error parsing JSON request string");
            }
    }

    public String addUser(String username, String email, String password){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        String registrationStatus = "";

        try{
            String sqlInsertCustomer = "INSERT INTO user (username,email,password) values('"+username+"','"+email+"',MD5('"+password+"'))";
            String sqlCheckEmail = "SELECT * FROM user WHERE email = '"+ email +"'";
            connection = DriverManager.getConnection(
               "jdbc:mysql://localhost:3306/cohab?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
               "root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlCheckEmail);
             
            if(!resultset.next()){              
                int result = statement.executeUpdate(sqlInsertCustomer);
                if(result==1)
                    registrationStatus="Success";
                 else
                    registrationStatus="Fail";
            }
            else
                registrationStatus="Email";    
        
        }
        catch(SQLException ex)
        {
            registrationStatus="Fail";
            System.err.println(ex.getMessage());
        }
        finally
        {
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
        return registrationStatus;
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
