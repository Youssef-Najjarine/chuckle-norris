import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ChuckleNorris {





    public static void main(String[] args) {
        String apiUrl = "https://api.chucknorris.io/jokes/random";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(apiUrl))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            System.out.println( response.body());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
