package com.webspecialization.backend.advice;

import com.webspecialization.backend.exception.AccessDeniedException;
import com.webspecialization.backend.exception.InvalidArgumentException;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.exception.RecordAlreadyExistsException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ApplicationExeptionHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {

        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        return errors;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(NotFoundException.class)
    public Map<String, String> handleNotFoundExceptions(NotFoundException ex) {
        Map<String, String> errors = new HashMap<>();
        errors.put("errorMessage", ex.getMessage());
        return errors;
    }

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(RecordAlreadyExistsException.class)
    public Map<String, String> handleRecordAlreadyExistsExceptions(RecordAlreadyExistsException ex) {
        Map<String, String> errors = new HashMap<>();
        errors.put("errorMessage", ex.getMessage());
        return errors;
    }

    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(AccessDeniedException.class)
    public Map<String, String> handleAccessDeniedException(AccessDeniedException ex) {
        Map<String, String> errors = new HashMap<>();
        errors.put("errorMessage", ex.getMessage());
        return errors;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(InvalidArgumentException.class)
    public Map<String, String> handleInvalidArgumentException(InvalidArgumentException ex) {
        Map<String, String> errors = new HashMap<>();
        errors.put("errorMessage", ex.getMessage());
        return errors;
    }
}
