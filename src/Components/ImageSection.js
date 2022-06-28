import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4><span>S M HASNAT HOSSAIN</span></h4>
                <p className="paragraph">
                A professional Full-Stack Web Developer with over 4 years of hands-on experience developing both front and back end of complex, web-based applications, enjoys creating fully responsive, user friendly web experiences, and deliver highly accurate products that meet quality standards, and an excellent communication with Interpersonal skills and a self-motivated team player
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: S M HASNAT HOSSAIN</p>
                        <p>: 25</p>
                        <p>: Bangladeshi </p>
                        <p>: Spanish, French, English </p>
                        <p>: London, United Kingdom</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
