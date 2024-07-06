package com.codeElevate.ServiceBookingSystem.dto;

import com.codeElevate.ServiceBookingSystem.enums.ReservationStatus;
import com.codeElevate.ServiceBookingSystem.enums.ReviewStatus;
import lombok.Data;

import java.util.Date;

@Data
public class ReservationDTO {

    private Long id;

    private Date bookDate;

    private String serviceName;

    private ReservationStatus reservationStatus;

    private ReviewStatus reviewStatus;

    private Long userId;

    private String userName;

    private Long companyId;

    private Long adId;

}
