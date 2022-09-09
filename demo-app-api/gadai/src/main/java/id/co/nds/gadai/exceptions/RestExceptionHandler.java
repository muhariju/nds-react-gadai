package id.co.nds.gadai.exceptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import id.co.nds.gadai.models.ResponseModel;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		Map<String, String> errors = new HashMap<>();

		ex.getBindingResult().getAllErrors().forEach((error) -> {

			String fieldName = ((FieldError) error).getField();
			String message = error.getDefaultMessage();
			errors.put(fieldName, message);
		});
		ResponseModel respon = new ResponseModel();
		respon.setResponseDescription("");
		respon.setResponseMessage("ERROR");
		errors.forEach((key, value) -> {
			String responseError = "";
			String keyMsg = "";
			if (key.equals("userId")) {
				keyMsg = "User Id";
			}
			if (key.equals("userName")) {
				keyMsg = "Nama User";
			}
			if (key.equals("userHp")) {
				keyMsg = "Nomor HP";
			}
			if (key.equals("userDesc")) {
				keyMsg = "Keterangan";
			}
			if (key.equals("userTxnLimit")) {
				keyMsg = "Maksimal Limit Transaksi User";
			}
			if (key.equals("userRegDate")) {
				keyMsg = "Tanggal Masuk";
			}

			responseError += keyMsg + " : " + value;
			if (respon.getResponseDescription() != "") {
				respon.setResponseDescription(respon.getResponseDescription() + ", ");
			}
			respon.setResponseDescription(respon.getResponseDescription() + responseError);
		});
		return new ResponseEntity<Object>(respon, HttpStatus.BAD_REQUEST);
	}

}
