package app;
import com.pengrad.telegrambot.model.Update;

public interface ControllerSearch {
	
	public void search(Update update);
	
	public void searchAPI(String latlon, String categoria) throws IOException;

}
