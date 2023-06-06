import React from 'react'
import { useNavigate } from 'react-router-dom';
import Phone from '../../../../utils/phone/Phone';
import AnimatedPage from '../../../../utils/AnimatedPage';


export default function JobDetails() {
const navigate = useNavigate();
  return (
    <Phone>
        <AnimatedPage>
        <div className="navbar h-14 ">
            <div className="navbar-start">
                <div>
                <label tabIndex={0} className="btn btn-ghost btn-circle" onClick={() => navigate(-1)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </label>
                </div>
            </div>
            <div className="navbar-center flex flex-col">
                <h3 className="normal-case text-sm font-semibold text-zinc-700">Product Designer</h3>
                <p className="normal-case text-xs font-normal text-zinc-500">Tokopedia</p>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                </svg>
                </button>
            </div>
        </div>

        <section className='overflow-y-scroll relative h-[515px]'>
            <div className='mx-4'>
                <img className='w-14 h-14 mb-1' src='https://www.freepnglogos.com/uploads/logo-tokopedia-png/berita-tokopedia-info-berita-terbaru-tokopedia-6.png' />
                <p className='text-md font-bold text-black'>Product Designer</p>
                <p className='text-xs text-rose-500'>Tokopedia</p>
                <p className='text-xs text-gray-500'>Jakarta - Fulltime - Onsite</p>
            </div>
            <div className='border-4 border-zinc-100 my-4'></div>
            <div className='mx-4'>
                <p className='text-zinc-800 text-sm font-bold mb-2'>Job Summary</p>
                <p className='text-xs text-zinc-400'>The UI/UX Designer helps create beautiful visual products with a great user experience. They are responsible for designing graphic elements, creating navigation components, understanding what users need from their device and then designing it so they can do things effortlesly. UI/UX Designer also make sure everything works as intended.</p>
            </div>
            <div className='border-4 border-zinc-100 my-4'></div>
            <div className='mx-4'>
                <p className='text-zinc-800 text-sm font-bold mb-2'>Job Descriptions</p>
                <ul class="list-disc list-outside">
                    <li className='text-xs text-zinc-400 ml-4'>Take part in building design system and reusable components that’s scalable.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Responsible for end to end product design process.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Research and stay well-informed on latest design practices.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Communicate ideas & design reasoning clearly. </li>
                    <li className='text-xs text-zinc-400 ml-4'>Implement and execute effective user testing method.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Support the conversion optimization process and provide insight via research on potential new features and tools that can enhance UX or UX insight.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Formulate good design ideas and propose solutions to increased product usefulness and usability.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Demonstrate your prototype / design results to user and stakeholder.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Create an ideas illustration through process flow and storyboards.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Create prototypes for both mobile and desktop applications.</li>
                </ul>
            </div>
            <div className='border-4 border-zinc-100 my-4'></div>
            <div className='mx-4'>
                <p className='text-zinc-800 text-sm font-bold mb-2'>Requirements</p>
                <ul class="list-disc list-outside">
                    <li className='text-xs text-zinc-400 ml-4'>Minimum Bachelor’s Degree in minimum Visual Communication Design, Graphic Design, Information Engineering, dan Computer Science.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Minimum 2 years of working experience in UI/UX Designer.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Possess portfolios which demonstrate design process that you do.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Candidates without UX portfolio will not be considered.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Great expertise in UX methodology and design best practices.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Power user in figma & other design applications.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Understand how developers work is a plus.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Good communication skills and fast learner.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Creative, inisiative, dan able to work in a team.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Able to adapt quickly.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Ability to solve problems creatively and effectively.</li>
                    <li className='text-xs text-zinc-400 ml-4'>Work location: Green Ville, Jakarta</li>
                </ul>
            </div>
            <div className='border-4 border-zinc-100 my-4'></div>
            <div className='mx-4'>
                <p className='text-zinc-800 text-sm font-bold mb-2'>Required skills</p>
                <div className='space-x-1'>
                    <p className="badge badge- text-xs bg-white text-zinc-400 border border-zinc-300">UI/UX Designer</p>
                    <p className="badge badge- text-xs bg-white text-zinc-400 border border-zinc-300">User Interface (UI)</p>
                    <p className="badge badge- text-xs bg-white text-zinc-400 border border-zinc-300">User Interface (UI) Design</p>
                    <p className="badge badge- text-xs bg-white text-zinc-400 border border-zinc-300">User Experience (UX) Design</p>
                    <p className="badge badge- text-xs bg-white text-zinc-400 border border-zinc-300">Mobile UI Design</p>
                    <p className="badge badge- text-xs bg-white text-zinc-400 border border-zinc-300">Mobile Application Design</p>
                    <p className="badge badge- text-xs bg-white text-zinc-400 border border-zinc-300">User Experience (UX)</p>
                    {/* <p className="badge badge- text-xs bg-white text-zinc-400 border border-zinc-300">User</p>
                    <p className="badge badge- text-xs bg-white text-zinc-400 border border-zinc-300">User</p> */}
                </div>
            </div>
            <div className='fixed bottom-6 bg-white w-[296px] mx-4 pt-4 pb-3 rounded-full'>
                <button className="btn w-full rounded-full text-white font-bold">Apply</button>
            </div>
        </section>


        </AnimatedPage>
    </Phone>
  )
}
