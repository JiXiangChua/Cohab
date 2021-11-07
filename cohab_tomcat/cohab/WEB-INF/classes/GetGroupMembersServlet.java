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

@WebServlet("/getGroupMembers")
public class GetGroupMembersServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
            String groupId = request.getParameter("groupId");    
            try{
                JSONArray membersObject = getGroupMembers(groupId);
                JSONObject mainObj = new JSONObject();
                mainObj.put("members", membersObject);
                System.out.println("---------------------------------------->"+mainObj);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(mainObj.toString());
            }
            catch (JSONException e) {
                // crash and burn
                throw new IOException("Error parsing JSON request string");
            }
    }

    public JSONArray getGroupMembers(String groupId){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONArray membersObject = new JSONArray();
        
        try{
            String sqlGetGroupMembers = "SELECT b.id,b.profileimage FROM cohab_db.usergroup as a join cohab_db.user as b on a.userid = b.id where a.groupid = "+groupId;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetGroupMembers);
    
            while(resultset.next()){
                JSONObject memberObject = new JSONObject();
                memberObject.put("userid", resultset.getInt("id"));
                memberObject.put("profileimg", resultset.getString("profileimage"));
                membersObject.put(memberObject);
            }
        
        }catch(Exception ex)
        {
            membersObject = null;
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
        return membersObject;
    }
}


