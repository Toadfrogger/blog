export function Header() {

    return (

        <div className="flex justify-between p-[20px]">
            <h1>Your name</h1>
            <ul className=" justify-evenly gap-[10px] hidden md:flex">
                <li>
                    <a>Blog</a>
                </li>

                <li>
                    <a>Project</a>
                </li>

                <li>
                    <a>About</a>
                </li>

                <li>
                    <a>Newsletter</a>
                </li>

                <div className="rounded-full bg-white w-[96px] h-[36px] flex justify-around">
                    <div className="rounded-full bg-indigo-950 w-[32px] h-[32px]"></div>

                    <div className="text-indigo-950">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </div>

                </div>
            </ul>

            <div className="text-white md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>


            </div>


        </div>

    );

}