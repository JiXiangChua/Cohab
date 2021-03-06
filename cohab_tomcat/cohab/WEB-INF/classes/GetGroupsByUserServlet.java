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

@WebServlet("/getGroupsByUser")
public class GetGroupsByUserServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
            String userId = request.getParameter("userId");
            try{
                JSONArray groupsObject = searchGroupsById(userId);
                JSONObject mainObj = new JSONObject();
                mainObj.put("groups", groupsObject);
                System.out.println("---------------------------------------->"+groupsObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(mainObj.toString());
            }
            catch (JSONException e) {
                // crash and burn
                throw new IOException("Error parsing JSON request string");
            }
    }

    public JSONArray searchGroupsById(String userId){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONArray groupsObject = new JSONArray();
        
        try{
            String sqlGetGroup = "SELECT a.* FROM cohab_db.group as a join usergroup as b on a.id = b.groupId where b.userId = "+userId;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetGroup);
            
    
            while(resultset.next()){
                JSONObject groupObject = new JSONObject();
                groupObject.put("id", resultset.getInt("id"));
                groupObject.put("groupname", resultset.getString("groupname"));
                groupObject.put("description", resultset.getString("description"));
                groupsObject.put(groupObject);
            }
        
        }catch(Exception ex)
        {
            groupsObject = null;
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
        return groupsObject;
    }
}


