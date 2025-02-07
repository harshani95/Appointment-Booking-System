package com.harshani.bookingSystem.service;

import com.harshani.bookingSystem.dto.request.RequestAppointmentDto;
import com.harshani.bookingSystem.dto.response.ResponseAppointmentDto;
import com.harshani.bookingSystem.entity.Appointment;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface AppointmentService {

     void saveAppointment(RequestAppointmentDto appointmentDto);
     void deleteAppointment(long id);
    List<ResponseAppointmentDto> getAllAppointments();

    List<LocalTime> getAvailableTimeSlots(LocalDate date);

}
