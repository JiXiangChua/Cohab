import java.util.*;
import javax.sql.DataSource;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.text.ParseException;
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
            try{
                JSONArray choresObject = getChoresById(groupId);
                JSONObject mainObj = new JSONObject();
                mainObj.put("chores", choresObject);
                //System.out.println("---------------------------------------->"+choresObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(mainObj.toString());
            }
            catch (JSONException e) {
                // crash and burn
                throw new IOException("Error parsing JSON request string");
            }
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
                    usersObject.put("currentUser", resultset.getString("profileimage"));
                }
                else if(resultset.getInt("seqNo")==2){
                    usersObject.put("nextUser", resultset.getString("profileimage"));
                }
                i++;
            }
            if(i<2){
                if(resultset.next()){
                    usersObject.put("currentUser", resultset.getString("profileimage"));
                    usersObject.put("nextUser", resultset.getString("profileimage"));
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

    public JSONArray getChoresById(String groupId){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        JSONArray choresObject = new JSONArray();

        try{
            String sqlGetChore = "SELECT*FROM cohab_db.chore as a join cohab_db.choretype as b on a.choretype = b.id where groupid = "+groupId;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            resultset = statement.executeQuery(sqlGetChore);
    
            while(resultset.next()){
                JSONObject choreObject = new JSONObject();
                choreObject.put("choreid", resultset.getInt("choreid"));
                choreObject.put("title", resultset.getString("title"));
                choreObject.put("repeatType", resultset.getString("repeatType"));
                choreObject.put("icon", resultset.getString("icon"));

                String repeatType = resultset.getString("repeatType");
                String startDate = resultset.getString("startDate");
                String cycleday = "";
                SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
                Calendar c = Calendar.getInstance();
                try{
                    //Setting the date to the given date
                    c.setTime(sdf.parse(startDate));
                }catch(ParseException e){
                    e.printStackTrace();
                }

                if(repeatType.contains("Weekly")){
                    cycleday = getDayOfWeek(c.get(Calendar.DAY_OF_WEEK));
                }else if(repeatType.contains("Monthly")){
                    cycleday = c.get(Calendar.DAY_OF_MONTH)+"th";
                }
                
                choreObject.put("cycleday", cycleday);
                
                JSONObject usersObject = getUserByChores(resultset.getInt("choreid"));
                choreObject.put("currentUser", usersObject.getString("currentUser"));
                choreObject.put("nextUser", usersObject.getString("nextUser"));
                choresObject.put(choreObject);
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

    public String getDayOfWeek(int value){
        String day = "";
        switch(value){
        case 1:
            day="Sun";
            break;
        case 2:
            day="Mon";
            break;
        case 3:
            day="Tue";
            break;
        case 4:
            day="Wed";
            break;
        case 5:
            day="Thu";
            break;
        case 6:
            day="Fri";
            break;
        case 7:
            day="Sat";
            break;
        }
        return day;
    }
}

