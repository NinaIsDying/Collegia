package com.example.entity;

import jakarta.persistence.*;

@Entity
@PrimaryKeyJoinColumn(name = "userId")
public class FacultyEntity extends UserEntity{
    private String department;

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
