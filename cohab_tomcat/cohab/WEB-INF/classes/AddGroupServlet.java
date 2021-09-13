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

@WebServlet("/addGroup")
public class AddGroupServlet extends HttpServlet {
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
            int userId = jsonObject.getInt("userId");
            String groupName = jsonObject.getString("groupName");
            String description = jsonObject.getString("description");
            String type = jsonObject.getString("type");
            
            JSONObject jObject = new JSONObject();
            String createStatus = "";
            int groupId = addGroup(groupName, description);
            if(groupId!=0){
                createStatus = addRelation(groupId,userId,type);
            }
            
            switch (createStatus) {
                    case "Success":
                        jObject.put("status", "OK");
                        jObject.put("groupId", groupId);
                        break;
                    case "Fail":
                        default:
                        jObject.put("status", "Sorry, here was some error happend. Please try again.");
                        break;
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

    public int addGroup(String groupName, String description){
        Connection connection = null;
        Statement statement = null;
        PreparedStatement preparedStatement =null;
        ResultSet resultset = null;
        int groupId = 0;

        try{
            String sqlInsertGroup = "INSERT INTO cohab_db.group (groupname,description) values(?,?)";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            preparedStatement=connection.prepareStatement(sqlInsertGroup,Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, groupName);
            preparedStatement.setString(2, description);
            preparedStatement.executeUpdate();
            
            ResultSet rs = preparedStatement.getGeneratedKeys();
            if (rs.next()) {
                groupId = rs.getInt(1);
            }
        }
        catch(SQLException ex)
        {
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
        return groupId;
    }

    public String addRelation(int groupId, int userId,String type)
     {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        String createStatus = "";

        try{
            String sqlInsertRelation = "INSERT INTO usergroup (groupid,userid,type) values("+groupId+","+userId+",'"+type+"')";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            int result = statement.executeUpdate(sqlInsertRelation);

            if(result==1){
                createStatus = "Success";
            }
        
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
