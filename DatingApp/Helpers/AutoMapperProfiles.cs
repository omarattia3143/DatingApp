﻿using System.Linq;
using AutoMapper;
using DatingApp.Dtos;
using DatingApp.Models;

namespace DatingApp.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl,
                    opt =>
                    {
                        opt.MapFrom(
                            src => src.Photos.FirstOrDefault(
                                p => p.IsMain).Url);
                    })
                .ForMember(dest => dest.Age,
                    opt
                        =>
                    {
                        opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                    });

            CreateMap<User, UserForDetailedDto>().ForMember(dest => dest.PhotoUrl,
                opt => opt.MapFrom(
                    src => src.Photos.FirstOrDefault(
                        p => p.IsMain).Url)).ForMember(dest => dest.Age,
                opt
                    =>
                {
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                });
            ;

            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}