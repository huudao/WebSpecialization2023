package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.Image;
import com.webspecialization.backend.repo.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    @Autowired
    ImageRepository imageRepository;

    public void delete(Image image) {
        imageRepository.delete(image);
    }
}
