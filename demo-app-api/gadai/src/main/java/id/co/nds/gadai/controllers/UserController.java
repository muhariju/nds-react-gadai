package id.co.nds.gadai.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import id.co.nds.gadai.models.ResponseModel;
import id.co.nds.gadai.models.UserModel;
import id.co.nds.gadai.services.UserService;
import id.co.nds.gadai.entities.UserEntity;

@RestController
@RequestMapping(value = "/train-gadai/user")
public class UserController {
    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/all")
    public ResponseEntity<ResponseModel> doGetAllUsers() {
        // request
        List<UserEntity> users = userService.doGetAllUsers();
        ResponseModel response = new ResponseModel();
        response.setMsg("Request successfully");
        response.setResponseData(users);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/search")
    public ResponseEntity<ResponseModel> doSearchUserController(
            @RequestBody UserModel userModel) {
        List<UserEntity> users = userService.doSearchUser(userModel);
        ResponseModel response = new ResponseModel();
        response.setMsg("Request successfully");
        response.setResponseData(users);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/add")
    public ResponseEntity<ResponseModel> doInsertUserController(
            @Valid @RequestBody UserModel userModel) {
        UserEntity user = userService.doInsert(userModel);
        // response
        ResponseModel response = new ResponseModel();
        response.setMsg("New user is successfully added");
        response.setResponseData(user);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/getDetail")
    public ResponseEntity<ResponseModel> doGetDetailUser(
            @RequestParam(required = false) String id) {
        // request
        UserEntity user = userService.findById(id);
        // response
        ResponseModel response = new ResponseModel();
        response.setMsg("Request successfully");
        response.setResponseData(user);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(value = "/update")
    public ResponseEntity<ResponseModel> doUpdate(
            @RequestBody UserModel userModel) {
        // request
        UserEntity user = userService.doUpdate(userModel);

        // response
        ResponseModel response = new ResponseModel();
        response.setMsg("User is successfully updated");
        response.setResponseData(user);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(value = "/delete")
    public ResponseEntity<ResponseModel> doDelete(
            @RequestParam(required = false) String id, String actorId) {
        // request
        UserEntity user = userService.doDelete(id);

        // response
        ResponseModel response = new ResponseModel();
        response.setMsg("User is successfully updated");
        response.setResponseData(user);
        return ResponseEntity.ok(response);
    }
}
