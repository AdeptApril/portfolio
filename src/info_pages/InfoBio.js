import React from 'react';

/*Provides data and structure for when further info is wanted on
* April's bio*/
export default class InfoBio extends React.Component{
    render() {
        return (
            <div className="info-div">
                <p className="paragraph-header">Intro</p>
                <p>April has a masters in Computer Science and through that and outside projects has experience with multiple languages, IDEs, and code management software.</p>
                <p className="paragraph-header">Languages and Tools</p>
                <p>She has experience with Java and a variety of C-style languages in the projects detailed on this site.</p>
                <p>Through this website and others, she is familiar with web languages and APIs, having used ReactJS, CSS, HTML, PHP, and helped develop a REST API.</p>
                <p>April also has experience with git, github, and other code repository/management tools.</p>
                {/* <p>This includes Java (Checkout Themes demonstration project, Love Story Real-Time Demo, and a variety of school projects), Android/Java (Smart Glasses Machine Monitor), C (Updater program for Checkout themes, weather station and other embedded systems projects), C++ (school assignments), other C-style languages (Remote Plant Watering (Arduino)), Javascript/ReactJS (Portfolio website), HTML/CSS (Portfolio project, checkoutthemes.com), and PHP (checkout themes theme updater).</p>*/}
                <p className="paragraph-header">Flexible Learning</p>
                <p>When needed, she picks up languages and tools to fit a project, whether it's learning to use Webstorm, using Ruby to play Ruby Warrior, or figuring out how to use BASIC for a C64 or Apple //e.</p>
                <p className="paragraph-header">Awards and Accolades</p>
                <p>Her custom-language themes for library self-checkouts won the Chester Pismo Snavely award. She developed a variety of languages, including the Haiku theme that was featured in a newspaper article, and other themes like "Pirate" and "Zombie" that were featured in her, "Pirates, Patrons, and You" talk she gave at a Wisconsin library convention. The themes were also featured by the machine maker to display the capabilities of the machines, and additional themes were created by high-school students as part of a Computer Science unit.</p>
                <p>She also wrote and presented, "Scenario-Based Analysis of IoT Protocols at Device and Application Layers" at the 33rd International Conference on Computers and Their Applications (CATA 2018)</p>
                <p className="paragraph-header">Hobbies</p>
                <p>In her free time, she enjoys keeping up with the latest releases from the Demoscene, juggling (whether teaching, learning, or performing), and working on her German and Spanish skills.</p>
                <p className="paragraph-header">Further Info</p>
                <p>Check out the rest of the pages for an introduction to some of the projects that April has done, as well as more in-depth info on the Masters degree and juggling.</p>
                <p>See her <a href="http://aprilmonoceros.com/April%20Resume%20Color.pdf">resume</a>, and e-mail her at <a href='mailt&#111;&#58;&#97;%&#55;0&#114;il%40%&#54;Do%6Eo%63ero%&#55;3&#46;&#114;ocks'>&#97;pr&#105;&#108;&#64;&#109;on&#111;c&#101;ro&#115;&#46;&#114;ocks</a>. She's looking forward to her next opportunity, and is excited to hear more about how she can help your organization.</p>
            </div>
        )
    }
}