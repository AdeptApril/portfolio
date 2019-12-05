import React from 'react';

/*Provides data and structure for when further info is wanted on
* The Deutsch Telekom Smart Glasses Demonstration Project*/
export default class InfoStormBBS extends React.Component{
    render() {
        return (
            <div className="info-div">
              <p className="paragraph-header">Intro</p>
              <p>Storm BBS is an interactive hobby project that hearkens back to what people did with modems and computers back in the 1980s and 1990s.</p>
              <p>The general idea is something akin to a special website where the graphics are text based, but there's more to it than that. The <a href="https://en.wikipedia.org/wiki/Bulletin_board_system">Wikipedia page</a> gives a good introduction to the idea.</p>
              <p>The board currently runs Mystic BBS software, though a previous incarnation ran KBBS. There's messages, games, and files to explore.</p>
              <p className="paragraph-header">Storm BBS Coding Projects</p>
              <p>Since April has gained coding skills over time, she also wanted to experiment  bit with the ability to configure the BBS, and has worked on a couple of Python-based toy projects on the BBS.</p>
              <p>This includes having a lightning bolt appear as an interstitial, and creating a fairly-complete, if rudimentary, Go/Baduk/Weiqi game. She has enjoyed learning some more Python and getting to make interesting and useful additions to the BBS.</p>
              <p>See <a href="http://www.stormbbs.com">stormbbs.com</a> for the website about the BBS, and <a href="http://bbs.stormbbs.com/">bbs.stormbbs.com</a> for an interface to easily call into the BBS yourself. You can also telnet to telnet.stormbbs.com if you have a telnet client.</p>
            </div>
        )
    }
}