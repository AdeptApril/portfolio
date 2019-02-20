import React from 'react';

/*Provides data and structure for when further info is wanted on
* the library self-checkout themes*/
export default class InfoCheckoutThemes extends React.Component{
    render() {
        return (
            <div className="info-div">
                <p className="paragraph-header">Intro</p>
                <p>April made library self-checkout machines talk in Pirate. And then it became so much more</p>
                <p className="paragraph-header">History - in the beginning</p>
                <p>Before grad school, April worked in a library.</p>
                <p>The library got new self-checkout machines for people to use, and the maker of the machines touted their ability to be configured</p>
                <p>Now, September 19th is an important day -- International Talk Like a Pirate Day, and April wanted to make the machines talk in pirate for that special day.</p>
                <p>So she got permission, took a look at the machines and their configuration software, and saw that it could be done through that software, but it'd require a lot of work on any particular machine</p>
                <p>So she looked for a faster way, and found configuration files that she could edit directly. This means she could make them on her own computer, then copy them to any given machine.</p>
                <p>At this point, she worked with other library staff members to record sounds and create pictures for the theme.</p>
                <p>And on the next International Talk Like a Pirate Day, the machines greeted users with a song of, "Way, hey, you can scan your card now"</p>
                <p className="paragraph-header">History - The project grows</p>
                <p>It was a hit. People loved it, and the machines became a focal point at the library.</p>
                <p>So, of course, there were immediate suggestions for what other themes April could make.</p>
                <p>And so she did. Next was Pig Latin. Then Zombie (in Zombie, with all the sound effects being "Braaaaains!" or other zombie sounds made by staff and patrons), and then many more -- 15 in all.</p>
                <p className="paragraph-header">History - Accolades and themes spreading</p>
                <p>The themes were a big success, but didn't stop at that single library -- other libraries heard about it, and at least five other libraries wound up using them.</p>
                <p>Given that April put them up online for libraries to use, and the maker of the machines used them to tout the flexibility of the machines, this is likely an undercount</p>
                <p>But they were noticed in other ways:</p>
                <p>They won a system-wide award.</p>
                <p>April gave a talk at a library associate meeting.</p>
                <p>Websites mentioned it as a neat project.</p>
                <p>And the local paper did a front-page article about the machines talking in Haiku for National Poetry Month.</p>
                <p className="paragraph-header">History - April gains coding skills</p>
                <p>Eventually, April went back to school -- first as a special student, then as a grad student.</p>
                <p>This meant she had new skills to use, and so she used her increasing skills in C to write a theme updater.</p>
                <p>She also used PHP, HTML, and CSS as part of that, with the end product being a web page where a person could choose the theme to put on a particular machine, and it'd happen automatically.</p>
                <p>This was an interesting moment, as the project went from, "You have to individually switch text, sound, pictures, etc." to "You have to plug in a flash drive and copy things to the right place" to "You have to open up the machines, then download and run some files" to, now, "Just click what you want, and it'll be there"</p>
                <p>After that, April used her Java skills (with some help from classmates as part of a project) to create a theme displayer so that she could show off the themes without having to use the machines at all.</p>
            </div>
        )
    }
}