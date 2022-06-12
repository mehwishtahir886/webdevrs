import React from 'react'
import classes from './Faqs.module.css'
import Faqsmy from './Faqsmy';
import {
    Container,
} from 'react-bootstrap';
import { useState } from 'react';



const Faqs = () => {



    const questions = [
        {
            q: 'What courses do you offer?',
            a: 'Coding Dojo offers courses in Software Development, Data Science, Cybersecurity, and UI/UX Design. Our Software Development courses are available in both full-time and part-time formats. Our other courses are currently only available as part-time courses.',
        },
        {
            q: 'Do you have part-time courses?',
            a: 'Yes! All our courses are available in part-time formats.',

        },
        {
            q: 'Which course is right for me?',
            a: 'The best way to figure out which course is right for you is to speak to one of our admissions advisors! They can talk to you about your career goals, how much time you want to dedicate to the program, and what financing options are available to figure out which course is the best fit for you.',
        },
        {
            q: 'What is a typical day or week like at the Dojo?',
            a: 'Your typical day or week will depend on whether you are taking a full-time or part-time course, and whether you are attending class on campus or online. Visit our program pages or download our course packets to learn more about life in each program.',
        },

        {
            q: 'How much time will I spend?',
            a: 'Your time commitment will vary by course and by your learning style! Some students spend more than the recommended hours, and some spend less. Our recommended hours range from 10 per week all the way to 90(!) depending on your program. Check out the program pages, download our course packets, or speak to an admissions advisor to learn more.',
        },

        {
            q: 'What is the student/teacher ratio? How many students will be in my class?',
            a: 'With our instructors and TAs, we maintain a 25:1 ratio overall. However, ratios do vary by activity. In lectures, you may have as many as 75 students in a part-time lecture, or up to 45 students in a full-time lecture. In weekly office hours, you’ll have access to your instructor with 1 or 2 other students. Online and after hours, you can receive 1:1 support from our TAs.',
        },

        {
            q: 'What happens if I fall behind?',
            a: 'Our student support team is there to help if you fall behind! If you find that you need to retake a part of the course, we have a retake policy in place (this varies by class). We also allow students to pause the course if they have an extenuating circumstance. On the rare occasions that a student doesn’t feel the course is right for them, or isn’t finding success, we offer pro-rated refunds up to halfway through the curriculum.',
        },

        {
            q: 'What do I receive when I graduate?',
            a: 'You will receive a Coding Dojo certificate of completion, and depending on the course, your belt titles or other professional certifications. Not to mention, you’ll join our vast alumni network! You also keep your access to our career services team for life, and a discount off any future courses you may wish to take with us.',
        },

        {
            q: 'What is the difference between your online and onsite courses?',
            a: 'In general, our Online and Onsite Software Development courses are similar. However, the amenities and community you’ll receive on campus is on another level. Enjoy free coffee and snacks, conference and lounge areas to study and collaborate with your fellow students, and so much more. Explore life on campus at it tower lahore',
        },

        {
            q: 'Do I need a laptop? What else should I bring?',
            a: 'Yes! Please ask your instructor or onboarding specialist about the tech requirements for your exact course. For all online courses, you will need access to stable wifi and a microphone. Web cameras are highly recommended.',
        },

        {
            q: 'If I am attending onsite bootcamp, do you provide housing options?',
            a: 'We do not provide funding for housing, or offer on-campus housing options. You will be connected with your classmates before the bootcamp, so those looking for shared housing can coordinate their search. AirBnB, Craigslist, and other temporary housing finders are great resources to use.',

        },





    ]
    const [data, setData] = useState(questions)

   const ren =  data.map((item) => {

        return (
            <>
                <Faqsmy q={item.q}  a={item.a} />
            </>
        )


    })


    return (
        <>
            <Container className={classes.conta}>
 
                <div className={classes.faq}>
                    <h1>You've Got Questions? We've Got Answers.</h1>
                    {ren}
                </div>

            </Container>
        </>
    )
}

export default Faqs