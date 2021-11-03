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

@WebServlet("/updateChore")
public class UpdateChoreServlet extends HttpServlet {
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
                int choretypeid = jsonObject.getInt("choretypeid");
                int choreid = jsonObject.getInt("choreid");
                String title = jsonObject.getString("title");
                String type = jsonObject.getString("type");
                String date = jsonObject.getString("date");

                String updateStatus = "NOK";
                updateStatus = updateChore(choreid,choretypeid,title,type,date);
                updateStatus = deleteChore(choreid);

                if(updateStatus=="OK"){
                    JSONArray seqsObject = jsonObject.getJSONArray("seqs");
                    int length = seqsObject .length(); 
                    //loop to get all json objects from data json array
                    for(int i=0; i<length; i++) 
                    {
                        JSONObject seq = seqsObject.getJSONObject(i);
                        int seqUserId = seq.getInt("userId");
                        int seqNo = seq.getInt("seqNo");
                        updateStatus = addChoreSeqs(choreid,seqUserId,seqNo);
                    }
                    
                }

                JSONObject jObject = new JSONObject();
                jObject.put("status",updateStatus);

                System.out.println("---------------------------------------->"+jObject);
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(jObject.toString());

            } catch (JSONException e) {
                // crash and burn
                throw new IOException("Error parsing JSON request string");
            }
    }

    public String deleteChore(int choreid){
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset=null;
        PreparedStatement preparedStatement =null;
        String status = "OK";

        try{
            String sqlDeleteChoreSeq = "Delete from cohab_db.choreseq where choreid = "+choreid;
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            preparedStatement=connection.prepareStatement(sqlDeleteChoreSeq);
            preparedStatement.executeUpdate();
        }catch(Exception ex)
        {
            status = "NOK";
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
        return status;
    }

    public String updateChore(int choreid,int choretypeid,String title, String type, String date){
        Connection connection = null;
        Statement statement = null;
        PreparedStatement preparedStatement =null;
        ResultSet resultset = null;
        String updateStatus = "OK";

        try{
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            String sqlUpdateChore = "Update cohab_db.chore SET title = '"+title+"', choretype ='"+choretypeid+"', repeatType ='"+type+"', startDate ='"+date+"' where choreid = "+choreid;
            preparedStatement=connection.prepareStatement(sqlUpdateChore);
            preparedStatement.executeUpdate();
        }
        catch(SQLException ex)
        {
            updateStatus = "NOK";
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
        return updateStatus;
    }

    public String addChoreSeqs(int choreid, int userid, int seqNo)
     {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultset = null;
        String createStatus = "";
        try{
            String sqlInsertSeq = "INSERT INTO cohab_db.choreseq (choreid,userid,seqNo) values("+choreid+","+userid+","+seqNo+")";
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cohab_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC","root", "ziyi");
            statement = connection.createStatement();
            int result = statement.executeUpdate(sqlInsertSeq);

            if(result==1){
                createStatus = "OK";
            }
        
        }catch(Exception ex)
        {
            createStatus = "NOK";
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
