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

@WebServlet("/getANNC")
public class GetANNCServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
                String groupid = request.getParameter("groupid");
                JSONObject anncObject = getGroupANNC(groupid);
                System.out.println("---------------------------------------->"+anncObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(anncObject.toString());
    }

    public JSONObject getGroupANNC(String groupid){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONObject anncObject = new JSONObject();

        try{
            String sqlGetANNC = "SELECT a.announcementid,a.description,a.timestamp,b.profileimage FROM cohab_db.announcement as a join cohab_db.user as b on a.userid = b.id where a.groupid = "+ groupid;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetANNC);
    
            while(resultset.next()){
                anncObject.put("id", resultset.getInt("announcementid"));
                anncObject.put("description", resultset.getString("description"));
                anncObject.put("timestamp", resultset.getString("timestamp"));
                anncObject.put("profileimage", resultset.getString("profileimage"));
            }
        
        }catch(Exception ex)
        {
            anncObject = null;
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
        return anncObject;
    }
}


