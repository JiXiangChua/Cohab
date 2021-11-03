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

@WebServlet("/getChoreTypeIcon")
public class GetChoreTypeIconServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
            try{
                JSONArray iconsObject = getChoreIcons();
                JSONObject mainObj = new JSONObject();
                mainObj.put("icons", iconsObject);
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

    public JSONArray getChoreIcons(){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONArray iconsObject = new JSONArray();
        
        try{
            String sqlGetChoreIcons = "SELECT * FROM cohab_db.choretype;";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetChoreIcons);
            
    
            while(resultset.next()){
                JSONObject iconObject = new JSONObject();
                iconObject.put("choretypeid", resultset.getInt("id"));
                iconObject.put("icon", resultset.getString("icon"));
                iconsObject.put(iconObject);
            }
        
        }catch(Exception ex)
        {
            iconsObject = null;
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
        return iconsObject;
    }
}


