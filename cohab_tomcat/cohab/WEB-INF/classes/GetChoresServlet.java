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

@WebServlet("/getChores")
public class GetChoresServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
                String groupId = request.getParameter("groupId");
                JSONObject choresObject = getChoresById(groupId);
                System.out.println("---------------------------------------->"+choresObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(choresObject.toString());
    }

    public JSONObject getUserByChores(int choreid){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONObject usersObject = new JSONObject();

        try{
            String sqlGetUsers = "SELECT * FROM cohab_db.choreseq as a join cohab_db.user as b on a.userid = b.id where choreid = "+choreid+" order by seqNo asc";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetUsers);

            int i = 0;
            while(resultset.next()){
                if(resultset.getInt("seqNo")==1){
                    usersObject.put("currentUser", resultset.getInt("userid"));
                }
                else if(resultset.getInt("seqNo")==2){
                    usersObject.put("nextUser", resultset.getInt("userid"));
                }
                i++;
            }
            if(i<2){
                if(resultset.next()){
                    usersObject.put("currentUser", resultset.getInt("userid"));
                    usersObject.put("nextUser", resultset.getInt("userid"));
                }
            }
        
        }catch(Exception ex)
        {
            usersObject = null;
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
        return usersObject;
    }

    public JSONObject getChoresById(String groupId){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONObject choresObject = new JSONObject();

        try{
            String sqlGetChore = "SELECT*FROM cohab_db.chore as a join cohab_db.choretype as b on a.choretype = b.id where groupid = "+groupId;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetChore);
    
            while(resultset.next()){
                choresObject.put("choreid", resultset.getInt("choreid"));
                choresObject.put("title", resultset.getString("title"));
                choresObject.put("repeatType", resultset.getString("repeatType"));
                choresObject.put("icon", resultset.getString("icon"));
                //choresObject.put("startdate", resultset.getString("timestamp"));
                JSONObject usersObject = getUserByChores(resultset.getInt("choreid"));
                choresObject.put("currentUser", usersObject.getInt("currentUser"));
                choresObject.put("nextUser", usersObject.getInt("nextUser"));
            }
        
        }catch(Exception ex)
        {
            choresObject = null;
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
        return choresObject;
    }
}


