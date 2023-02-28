import React from 'react'
import Banner from './Banner'
import BrandCarousel from './BrandCarousel'
import Portfolio from './Portfolio'
import Rescue from './Rescue'
import SkillsCard from './SkillsCard'

const HomePage = () => {
    return (
        <div>
            <Banner titleHome="Hire World’s Best Talent Within 24 Hours"
                descriptionHome="Technology Solutions is a flexible platform 
             to vet and hire a talent like software developers, designers 
             and digital marketers that match your time zone and work model."
            />
            <BrandCarousel />
            <SkillsCard />
            <Portfolio />
            <Rescue />
        </div>
    )
}

export default HomePage