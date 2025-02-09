package com.harshani.bookingSystem.service;

import com.harshani.bookingSystem.dto.request.RequestUserDto;

public interface UserService {
    public String signup(RequestUserDto userDto);
    public String login(RequestUserDto userDto);
}
