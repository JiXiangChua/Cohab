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

@WebServlet("/joinGroup")
public class JoinGroupServlet extends HttpServlet {
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
            int groupId = jsonObject.getInt("groupId");
            int userId = jsonObject.getInt("userId");

            JSONObject jObject = new JSONObject();

            if(!checkGroupId(groupId)){
                jObject.put("status", "Group does not exist.");
            }
            else{
                String createStatus = addRelation(groupId,userId);

                switch (createStatus) {
                    case "Success":
                        jObject.put("status", "OK");
                        break;
                    case "Duplicate":
                        jObject.put("status", "You have already in the group!");
                        break;
                    case "Fail":
                        default:
                        jObject.put("status", "Sorry, here was some error happend. Please try again.");
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

    public boolean checkGroupId(int groupId){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        boolean flag = false;

        try{
            String sqlCheckGroup = "Select*From cohab_db.group where id = "+groupId;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlCheckGroup);

            if(resultset.next()){              
                flag =true;
            }

        }catch(Exception ex)
        {
            flag = false;
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
        return flag;
    }

    public String addRelation(int groupId, int userId)
    {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        String createStatus = "";

        try{
            String sqlCheckUnique = "Select*From usergroup where userid = "+userId+" and groupid ="+groupId;
            String sqlInsertRelation = "INSERT INTO usergroup (groupid,userid) values("+groupId+","+userId+")";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlCheckUnique);
             
            if(!resultset.next()){              
                int result = statement.executeUpdate(sqlInsertRelation);
        
                if(result==1)
                    createStatus = "Success";
                 else
                    createStatus="Fail";
            }
            else
                createStatus="Duplicate";
        }catch(Exception ex)
        {
            createStatus = "Fail";
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
        return createStatus;
    }
    
}
