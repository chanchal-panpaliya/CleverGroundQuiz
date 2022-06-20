type Quizlist = {
    _id:string,
    CategoryName:string,
    CategoryType:string,
    Desc:string,
    Total:number,
    Attempt:boolean,
    Quiz_Set : Quiz_Set 
}[];

type Quiz_Set = {
    queno : string;
    que : string;
    options : Quiz_options;
    ans:string;
    explanation:string;
}[];

type Quiz_options = {
    que_options:string;
    selected:boolean
}[];

const QuizStack :Quizlist= [
    //html
    {
        _id:"FvsljiM",
        CategoryName:"HTML",
        CategoryType:"Web Browsers",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) A Rendering engine is not responsible for ________?",
                options : [
                    {que_options: "parsing the markup content (HTML)" , selected: false},
                    {que_options:"parsing style information (CSS, XSL, and so on)", selected: false},
                    {que_options:"generating a visual presentation of the formatted content including media files referenced", selected: false},
                    {que_options:"parsing style information (CSS only)", selected: false}
                ],
                ans : "parsing style information (CSS only)",
                explanation:"A rendering engine is a software that draws text and images on the screen. The engine draws structured text from a document (HTML, XML) and formats it properly based on the given style declarations (CSS, XSL, etc). The primary job of a browser engine is to transform HTML documents and other resources of a web page into an interactive visual representation on a user’s device."
            },
            {
                queno:"que_2",
                que : "2) Firefox uses _________ rendering engine?",
                options : [{que_options: "WebKit" , selected: false},{que_options:"Gecko", selected: false},{que_options:"Trident", selected: false},{que_options:"Presto", selected: false}],
                ans : "Gecko",
                explanation:"Gecko is a web browser engine used in many applications developed by Mozilla Foundation and the Mozilla Corporation as well as in many other open source software projects. Gecko is free and open-source software subject to the terms of the Mozilla Public License version 2."
            },
            {
                queno:"que_3",
                que : "3)  State true or false. It is faster to render HTML and CSS than to interpret and execute JavaScript?",
                options : [{que_options: "True" , selected: false},{que_options:"False", selected: false}],
                ans : "True",
                explanation:"When it comes to ordering your CSS and JavaScript, you want your CSS to come first. The reason is that the rendering thread has all the style information it needs to render the page. If the JavaScript includes come first, the JavaScript engine has to parse it all before continuing on to the next set of resources."
            },
            {
                queno:"que_4",
                que : "4) What is the use of “defer” attribute?",
                options : [
                    {que_options:"It defers rendering of html page" , selected: false},
                    {que_options:"It defers script execution until the page has been rendered", selected: false},
                    {que_options:"It defers rendering of css attributes", selected: false},
                    {que_options:"It is only for internal scripts", selected: false},
                ],
                ans : "It defers script execution until the page has been rendered",
                explanation:"The defer attribute is a boolean attribute. The script is executed after the page has finished parsing. The defer attribute is used if and only if there is src attribute. Defer is for external not internal scripts."
            },
            {
                queno:"que_5",
                que : "5) Which of the following statements is false?",
                options : [
                    {que_options: "async and defer attributes of script tag execute before the DOMContentLoaded event" , selected: false},
                    {que_options:"defer executes each script sequentially", selected: false},
                    {que_options:"async executes each script when it is ready", selected: false},
                    {que_options:"all older browsers supports async attribute", selected: false}
                ],
                ans : "all older browsers supports async attribute",
                explanation:"In async attribute, the script is executed asynchronously with the rest of the page (the script will be executed while the page continues the parsing). Defer, the Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded event. Older browsers doesn’t support async attribute."
            },
            {
                queno:"que_6",
                que : "6)  Which of the following is used to read a HTML page and render it?",
                options : [{que_options:"Web browser" , selected: false},
                           {que_options:"Web server", selected: false},
                           {que_options:"Web matrix", selected: false},
                           {que_options:"Web network", selected: false}
                        ],
                ans : "Web browser",
                explanation:"A web browser (commonly referred to as a browser) is a software application for retrieving, presenting and traversing information resources on the World Wide Web. A web server process, store and display output to client as per their request. Web matrix is a discontinued cloud-connected website builder and HTML editor for Windows."
            },
            {
                queno:"que_7",
                que : "7)Which of the following is the first web browser?",
                options : [
                    {que_options:"Nexus" , selected: false},
                    {que_options:"Netscape Navigator", selected: false},
                    {que_options:"Internet Explorer", selected: false},
                    {que_options:"Mosaic", selected: false}
                ],
                ans : "Nexus",
                explanation:"The first web browser was invented in 1990 called World Wide Web which was later renamed to Nexus. In 1995, a graphical web browser named Internet Explorer was developed. The Netscape is a web browser produced by Netscape Communications. NCSA Mosaic, or Mosaic, is the web browser which in turn popularized World Wide Web."
            },
            {
                queno:"que_8",
                que : "8)Who created the first web browser?",
                options : [
                    {que_options: "Tim Berners Lee" , selected: false},
                    {que_options:"Jacobs, Lan", selected: false},
                    {que_options:"Marc Andeersen", selected: false},
                    {que_options:"Mozilla foundation", selected: false}
                ],
                ans : "Tim Berners Lee",
                explanation:"Sir Timothy John “Tim” Berners-Lee, also known as TimBL, is an English computer scientist, best known as the inventor of the World Wide Web. He made a proposal for an information management system in March 1989, and he implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet sometime around mid-November of that same year."
            }
        ]

    },
    {
        _id:"S9oscjiL",
        CategoryName:"HTML",
        CategoryType:"HTML5 – 1",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which feature was already introduced before HTML5?",
                options : [
                    {que_options:"Canvas/SVG" , selected: false},
                    {que_options:"Video", selected: false},
                    {que_options:"Geolocation", selected: false},
                    {que_options:"Frames", selected: false}
                ],
                ans : "Frames",
                explanation:"Until recently you could not draw on the web and graphics were not very interactive but canvas/SVG which were introduced by HTML5 solved all the problems. Video, Geolocation were also new features introduced by HTML5. Frames were already there before the launch of HTML5."
            },
            {
                queno:"que_2",
                que : "2) Which tag is used with JavaScript?",
                options : [
                          {que_options: "<canvas>" , selected: false},
                          {que_options:"<table>", selected: false},
                          {que_options:"<article>", selected: false},
                          {que_options:"<footer>", selected: false}
                        ],
                ans : "<canvas>",
                explanation:"<canvas> tag is basically used for graphics via scripting i.e. usually with Java Script (scripting language, basically used to create animations). Other tags like <table>, <article>, <footer> can be used simply with HTML."
            },
            {
                queno:"que_3",
                que : "3)What application can one create even before the introduction of HTML5?",
                options : [{que_options: "Web applications" , selected: false},
                           {que_options:"Mobile applications", selected: false},
                           {que_options:"Forms", selected: false},
                           {que_options:"Browser based games", selected: false}
                        ],
                ans : "Forms",
                explanation:" With the help of HTML5 and JavaScript it became possible to create excellent mobile applications, browser based games, web applications and many more other applications. Forms were already introduced before HTML5."
            },
            {
                queno:"que_4",
                que : "4) Which of the following is not semantic element for text in HTML5?",
                options : [
                    {que_options:"<mark>" , selected: false},
                    {que_options:"<time>", selected: false},
                    {que_options:"<wbr>", selected: false},
                    {que_options:"<article>", selected: false},
                ],
                ans : "<article>",
                explanation:"Semantic elements used for text are <mark>, <time>, <wbr> whereas <article>, <aside>, <figure>, <footer>, <header> etc. are the semantic elements for structuring a page in HTML5."
            },
            {
                queno:"que_5",
                que : "5) Which tag supports Non-English language?",
                options : [
                    {que_options: "<input>" , selected: false},
                    {que_options:"<audio>", selected: false},
                    {que_options:"<embed>", selected: false},
                    {que_options:"<bdo>", selected: false}
                ],
                ans : "<bdo>",
                explanation:"<bdo>, <rp>, <rt>, <ruby> are some tags which support Non-English language. <input> is for web forms and <audio>, <embed> are the tags for audio and plug-ins."
            },
            {
                queno:"que_6",
                que : "6) Which element was not removed by HTML5?",
                options : [{que_options:"<strike>" , selected: false},
                           {que_options:"<center>", selected: false},
                           {que_options:"<small>", selected: false},
                           {que_options:"<big>", selected: false}
                        ],
                ans : "<small>",
                explanation:"Although HTML5 adds new elements, it also kicked out some old elements like <big>, <center>, <font>, <tt>, <strike>. HTML5 adapted many elements also <small> is one among these. The <small> element represents “small print”."
            },
            {
                queno:"que_7",
                que : "7)What is the correct syntax of doctype in HTML5?",
                options : [
                    {que_options:"<!doctype html>" , selected: false},
                    {que_options:"<doctype html!>", selected: false},
                    {que_options:"<doctype html>", selected: false},
                    {que_options:"</doctype html>", selected: false}
                ],
                ans : "<!doctype html>",
                explanation:"The correct syntax of HTML5 doctype is <!doctype html>, doctype is the very first thing to write in HTML5. <!doctype html> or <!DOCTYPE HTML> both are same because ‘doctype’ keyword is not case sensitive."
            },
            {
                queno:"que_8",
                que : "8)What if one does not use the doctype in the starting of HTML document?",
                options : [
                    {que_options: "Browser finds the document in quirky mode" , selected: false},
                    {que_options:"Browser finds a document in standard mode", selected: false},
                    {que_options:"Browser stops working", selected: false},
                    {que_options:"Browser crashes after showing the page", selected: false}
                ],
                ans : "Browser finds the document in quirky mode",
                explanation:" If the browser finds <!doctype html> in the starting of an HTML document it sets the document in standard mode but if one does not use a doctype, the browser goes to quirky mode. In this mode, certain content will not be displayed as per one wrote that. So it is always recommended to write a doctype at the very start of the HTML document."
            }
        ]

    },
    {
        _id:"n97Ur8ik",
        CategoryName:"HTML",
        CategoryType:"HTML5 – 2",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following defines the title of a work?",
                options : [
                    {que_options:"<cite>" , selected: false},
                    {que_options:"<hr>", selected: false},
                    {que_options:"<a>", selected: false},
                    {que_options:"<address>", selected: false}
                ],
                ans : "<cite>",
                explanation:"The <cite> tag defines the title of a work. The <hr> tag is used to give a horizontal break. When we want to link one page to another, then <a> tag is used. The <address> tag is used to define the contact information about owner of document."
            },
            {
                queno:"que_2",
                que : "2) Which element is design to wrap a single piece of information?",
                options : [
                    {que_options:"<time>" , selected: false},
                    {que_options:"<nav>", selected: false},
                    {que_options:"<footer>", selected: false},
                    {que_options:"<header>", selected: false}
                ],
                ans : "<time>",
                explanation:"<time> tag wrap single piece of information i.e. it defines date, month and year. The <nav> element identifies a set of navigation links, <footer> is introduced in HTML5 which is present at the end of page and do conatins footer information i.e copyright information."
            },
            {
                queno:"que_3",
                que : "3) What an article element should not contain?",
                options : [
                    {que_options:"Main element" , selected: false},
                    {que_options:"Text or embedded content", selected: false},
                    {que_options:"Image", selected: false},
                    {que_options:"Video & Audio", selected: false}
                ],
                ans : "Main element",
                explanation:"The <main> element must NOT be a descendant of an <article>, <aside>, <footer>, <header>, or <nav> element. The article element may contain audio/video clips, images and also text or embedded content."
            },
            {
                queno:"que_4",
                que : "4) Which of the following statement is true?",
                options : [
                    {que_options:"Canvas Contains built-in animations" , selected: false},
                    {que_options:"SVG needs scripts to draw elements", selected: false},
                    {que_options:"In canvas, drawing is done with pixels", selected: false},
                    {que_options:"SVG don’t support to event handlers", selected: false}
                ],
                ans : "In canvas, drawing is done with pixels",
                explanation:"In SVG drawing is done with vectors and it support event handlers. Canvas doesn’t contains any built-in-animations and drawing is done with pixels."
            },
            {
                queno:"que_5",
                que : "5) What does <main> include?",
                options : [
                    {que_options:"Header" , selected: false},
                    {que_options:"Sidebar", selected: false},
                    {que_options:"Article", selected: false},
                    {que_options:"Footer", selected: false}
                ],
                ans : "Article",
                explanation:"<header> element contains navigation links. Slidebar is for hoverable/sliding text. <footer> is introduced in HTML5 which is present at the end of page and do contains footer information i.e copyright information. Main content is the entire article which wraps the <article> element. It holds the page’s main content. It can be useful for screen readers. E.g. <main> <article>…………</article> </main>"
            },
            {
                queno:"que_6",
                que : "6) Which of the following is not sectioning elements?",
                options : [
                    {que_options:"<article>" , selected: false},
                    {que_options:"<aside>", selected: false},
                    {que_options:"<nav>", selected: false},
                    {que_options:"<header>", selected: false}
                ],
                ans : "<header>",
                explanation:"The <section> element represents a section of a document or application. Tags like <article>, <aside>, <nav>, <section> are the ones that create a nested, new outline inside the page."
            },
            {
                queno:"que_7",
                que : "7) How many times can HTML5 events be fired?",
                options : [
                    {que_options:"Multiple" , selected: false},
                    {que_options:"One", selected: false},
                    {que_options:"Only two", selected: false},
                    {que_options:"Zero", selected: false}
                ],
                ans : "Multiple",
                explanation:"We can call events like drag, ondragover, etc multiple times in HTML5."
            },
            {
                queno:"que_8",
                que : "8) Which element is used to get highlighted text in HTML5?",
                options : [
                    {que_options:"<highlight>" , selected: false},
                    {que_options:"<b>", selected: false},
                    {que_options:"<mark>", selected: false},
                    {que_options:"<u>", selected: false}
                ],
                ans : "<mark>",
                explanation:"The <mark> element is used to highlight a section of text. It is useful for quoting a text or if one wants to bring attention to the text. The <b> tag is used to make text/paragraph bold. <u> tag is used to underline the text you wanted."
            },
            
        ]

    },
    {
        _id:"Z97mM82p",
        CategoryName:"HTML",
        CategoryType:"HTML5 Video",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which protocol is supported by Android browsers?",
                options : [
                    {que_options:"HTTPS" , selected: false},
                    {que_options:"HLS", selected: false},
                    {que_options:"RTMP", selected: false},
                    {que_options:"FTP", selected: false}
                ],
                ans : "HLS",
                explanation:"HTTPS i.e. Hypertext Transfer Protocol Secure is used on internet. HLS which stands for Hypertext Transfer Protocol Live Streaming invented by Apple Inc., a new streaming protocol which is supported by android browsers. RTMP stands for Real-Time Messaging Protocol, FTP stands for File Transfer Protocol."
            },
            {
                queno:"que_2",
                que : "2)  __________ is a JavaScript library that implements the most common user interface elements and interactions like sliders, accordions, tabs, and so on.?",
                options : [
                    {que_options:"JavaScript" , selected: false},
                    {que_options:"JQuery UI", selected: false},
                    {que_options:"VTS", selected: false},
                    {que_options:"JCL", selected: false}
                ],
                ans : "JQuery UI",
                explanation:"JQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library. JavaScript is a scripting language. VTS is a powerful rendering engine browser for JavaScript. JCL is Job Control Language which is also named as scripting language."
            },
            {
                queno:"que_3",
                que : "3)In HTML Audio/Video DOM, __________ sets or returns whether the audio/video should be loaded when the page loads.",
                options : [
                    {que_options:"preload" , selected: false},
                    {que_options:"autoplay", selected: false},
                    {que_options:"buffered", selected: false},
                    {que_options:"controller", selected: false}
                ],
                ans : "preload",
                explanation:"Autoplay, preload, buffered, controller etc are the different kinds of attribute of video/audio element. Using autoplay, video/audio automatically begins to play. The preload property allows the author to provide a hint to the browser about what he/she thinks will lead to the best user experience. This attribute may be ignored in some instances."
            },
            {
                queno:"que_4",
                que : "4) Which of the following is not a HTML5 tag?",
                options : [
                    {que_options:"<video>" , selected: false},
                    {que_options:"<source>", selected: false},
                    {que_options:"<track>", selected: false},
                    {que_options:"<slider>", selected: false}
                ],
                ans : "<slider>",
                explanation:"<video> tag is used to display video clips in HTML5. Multiple media resources for media elements is specified by <source> tag. Text track for media elements i.e. <audio> & <video> is provided by <track> tag in HTML5. There is no such thing as slider tag in HTML5."
            },
            {
                queno:"que_5",
                que : "5) What will happen if height and width of video are not set while video loads?",
                options : [
                    {que_options:"page flickers" , selected: false},
                    {que_options:"page does not load", selected: false},
                    {que_options:"page crash", selected: false},
                    {que_options:"page closes", selected: false}
                ],
                ans : "page flickers",
                explanation:"If height and width are not set, the browser does not know the size of the video. The effect will be that the page will change (or flicker) while the video loads."
            },
            {
                queno:"que_6",
                que : "6) Which of the following HTML Video – Media Type is not supported in IE?",
                options : [
                    {que_options:"WebM" , selected: false},
                    {que_options:"MP4", selected: false},
                    {que_options:"Ogg", selected: false},
                    {que_options:"MP4 FLAC", selected: false}
                ],
                ans : "Ogg",
                explanation:"The Ogg container format with the Theora video codec and the Vorbis audio codec is supported in desktop/mobile Gecko (Firefox), Chrome, and Opera, and support for the format can be added to Safari (but not on iOS) by installing an add-on. The format is not supported in Internet Explorer in any way. The most widely used format for HTMl video i.e MP4 format is supported in IE."
            },
            {
                queno:"que_7",
                que : "7) In HTML Audio/Video DOM, __________ sets or returns the CORS settings of the audio/video?",
                options : [
                    {que_options:"currentTime" , selected: false},
                    {que_options:"duration", selected: false},
                    {que_options:"defaultPlaybackRate", selected: false},
                    {que_options:"crossOrigin", selected: false}
                ],
                ans : "crossOrigin",
                explanation:"CurrentTime set or returns current playback position while playing audio/video. The length of the current audio/video is set or returned by duration. Default speed of playback is given by defaultPlaybackRate. The purpose of the crossorigin attribute is to allow you to configure the CORS requests for the element’s fetched data."
            },
            {
                queno:"que_8",
                que : "8) In HTML Audio/Video DOM, __________ returns a TimeRanges object representing the buffered parts of the audio/video.?",
                options : [
                    {que_options:"preload" , selected: false},
                    {que_options:"networkState", selected: false},
                    {que_options:"buffered", selected: false},
                    {que_options:"controller", selected: false}
                ],
                ans : "buffered",
                explanation:"Preload is used to set or return whether the video/ audio has been loaded on page. Current network of audio/video has been set or returned by networkState. A buffered range is a time-range of buffered audio/video. The user gets several buffered ranges if he/she skips in the audio/video. Media controller of current video/audio is given or returned by controller."
            },
        ]
    },
    {
        _id:"Z97mM82p012",
        CategoryName:"HTML",
        CategoryType:"Fonts",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) How many standard color names does HTML supports?",
                options : [
                    {que_options:"120" , selected: false},
                    {que_options:"130", selected: false},
                    {que_options:"140", selected: false},
                    {que_options:"90", selected: false}
                ],
                ans : "140",
                explanation:"In HTML one can use a color name to specify a color e.g. Tomato, Orange, DodgerBlue, MediumSeaGreen, Gray, SlateBlue, Violet, LightGray etc. For colored fonts, we used text-decoration property to set the color of the text."
            },
            {
                queno:"que_2",
                que : "2) Which of the following is not set with font-style property?",
                options : [
                    {que_options:"font-style: normal" , selected: false},
                    {que_options:"font-style: italic", selected: false},
                    {que_options:"font-style: oblique", selected: false},
                    {que_options:"font-style: capitalize", selected: false}
                ],
                ans : "font-style: capitalize",
                explanation:"Text-transform: capitalize, capitalizes the first letter of each word whereas font-style set font as normal, italic, oblique. We use text-transform: uppercase and text-transform: lowercase to change the text from lowercase to uppercase and from uppercase to lowercase respectively."
            }, 
            {
                queno:"que_3",
                que : "3) What should be set with text-align property so that every line has equal width like in magazines and newspapers?",
                options : [
                    {que_options:"text-align: justify" , selected: false},
                    {que_options:"text-align: none", selected: false},
                    {que_options:"text-align: bottom", selected: false},
                    {que_options:"text-align: top", selected: false}
                ],
                ans : "text-align: justify",
                explanation:"By setting text-align property to “justify”, each line is stretched so that every line has equal width, left and right margins are straight like in magazines and newspapers. Text-align: center, text-align: right, text-align: left is also used for aligning the text at center, right and left respectively."
            },
            {
                queno:"que_4",
                que : "4) Which of the following is not used with text-decoration property?",
                options : [
                    {que_options:"overline" , selected: false},
                    {que_options:"underline", selected: false},
                    {que_options:"line-through", selected: false},
                    {que_options:"inline", selected: false}
                ],
                ans : "inline",
                explanation:"overline, underline, line-through properties are used to decorate the text."
            },
            {
                queno:"que_5",
                que : "5) Which works similar to <i> element?",
                options : [
                    {que_options:"<strong>" , selected: false},
                    {que_options:"<em>", selected: false},
                    {que_options:"<b>", selected: false},
                    {que_options:"<blockquote>", selected: false}
                ],
                ans : "<em>",
                explanation:"<strong> element shows the importance of text/paragraph between it’s tags. <b></b> makes text bolder. A section which is quoted from another source is specified by <blockquote>. <em> element indicates emphasis, browser will show the contents of <em> element in italic."
            },
            {
                queno:"que_6",
                que : "6) Which element is used for abbreviation or acronym?",
                options : [
                    {que_options:"<em>" , selected: false},
                    {que_options:"<q>", selected: false},
                    {que_options:"<abbr>", selected: false},
                    {que_options:"<blockquote>", selected: false}
                ],
                ans : "<abbr>",
                explanation:"<em> element indicates emphasis, browser will show the contents of <em> element in italic. We used <q> element for shorter quote. Browser put quote around <q> element. A section which is quoted from another source is specified by <blockquote>. For using, abbreviation or acronym <abbr> element is helpful. A title element is to be used with abbr."
            },
            {
                queno:"que_7",
                que : "7) Which element is used to show inserted element?",
                options : [
                    {que_options:"<ins>" , selected: false},
                    {que_options:"<del>", selected: false},
                    {que_options:"<strong>", selected: false},
                    {que_options:"<em>", selected: false}
                ],
                ans : "<ins>",
                explanation:"<del> element shows text that has been deleted from, usually it has a line through the content. <strong> element shows the importance of text/paragraph between it’s tags. <em> element indicates emphasis, browser will show the contents of <em> element in italic. <ins> element shows the content that has been inserted, usually it has underline."
            },
            {
                queno:"que_8",
                que : "8) Which element defines a title of the Work?",
                options : [
                    {que_options:"<abbr>" , selected: false},
                    {que_options:"<cite>", selected: false},
                    {que_options:"<address>", selected: false},
                    {que_options:"<blockquote>", selected: false}
                ],
                ans : "<cite>",
                explanation:"For using, abbreviation or acronym <abbr> element is helpful. The contact details for author of a page is specified by <address> attribute. A section which is quoted from another source is specified by <blockquote>. The tittle of a Work is defined by <cite> elements, usually it displays in italics."
            },
        ]
    },
    {
        _id:"Z9788op2",
        CategoryName:"HTML",
        CategoryType:"Semantics",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following is not a semantic element?",
                options : [
                    {que_options:"<form>" , selected: false},
                    {que_options:"<article>", selected: false},
                    {que_options:"<table>", selected: false},
                    {que_options:"<span>", selected: false}
                ],
                ans : "<span>",
                explanation:"Semantic element describes its meaning to both developer and browser. Some of the semantic elements are <article>, <form>, <table>. Non-semantic elements are <span> and <div> and they tell nothing about their content."
            },
            {
                queno:"que_2",
                que : "2) Footer element can’t contain ____________ information",
                options : [
                    {que_options:"contact information" , selected: false},
                    {que_options:"copyright information", selected: false},
                    {que_options:"the author of the document", selected: false},
                    {que_options:"blog post", selected: false}
                ],
                ans : "blog post",
                explanation:"A footer for a document or section is specified by <footer> element. It should contain information about its containing element. This element typically contains the author of the document, links to terms of use, copyright information, contact information."
            },
            {
                queno:"que_3",
                que : "3) Which element represents preformatted text?",
                options : [
                    {que_options:"<main>" , selected: false},
                    {que_options:"<dir>", selected: false},
                    {que_options:"<dd>", selected: false},
                    {que_options:"<pre>", selected: false}
                ],
                ans : "<pre>",
                explanation:"Main content of document is specified by <menu> element. <dir> element is not supported in HTML5. It contains all directory titles. The <pre> element in HTML represents preformatted text. The text written inside <pre> element is presented exactly as written in HTML file. Text is typically rendered using non-proportional font. Whitespace inside the element is displayed as written. <dd> is used to describe a name in description list."
            },
            {
                queno:"que_4",
                que : "4) Which element represents a ruby annotation?",
                options : [
                    {que_options:"<rt>" , selected: false},
                    {que_options:"<rtc>", selected: false},
                    {que_options:"<ruby>", selected: false},
                    {que_options:"<rp>", selected: false}
                ],
                ans : "<ruby>",
                explanation:"In ruby, <rt> defines explanation of characters. The <ruby> element in HTML represents a ruby annotation. It is for showing pronunciation of East Asian characters. Both the starting and ending tags are necessary. It only includes global attributes. Parenthesis for ruby text is provided by <rp> element."
            },
            {
                queno:"que_5",
                que : "5) Which of the following element is known as ruby fallback parenthesis?",
                options : [
                    {que_options:"<rt>" , selected: false},
                    {que_options:"<rp>", selected: false},
                    {que_options:"<rtc>", selected: false},
                    {que_options:"<q>", selected: false}
                ],
                ans : "<rp>",
                explanation:"In ruby, <rt> defines explanation of characters. <rp> is Ruby Fallback Parenthesis element in HTML. It is used to provide fall-back parentheses for browsers that do not support display of ruby annotations when using <ruby< element. This element include global attribute only. <q> element is used for short quotation."
            },
            {
                queno:"que_6",
                que : "6) Which element prevents the text from automatically wrapping across multiple lines?",
                options : [
                    {que_options:"<em>" , selected: false},
                    {que_options:"<kbd>", selected: false},
                    {que_options:"<mark>", selected: false},
                    {que_options:"<nobr>", selected: false}
                ],
                ans : "<nobr>",
                explanation:"<em> is same like <i></i>. It is emphasized text. <kbd> element is HTML Keyboard Input Element. <mark> element is for highlighting the text/paragraph. <nobr> is non-standard obsolete HTML element. This element prevents the text it contains from automatically wrapping across multiple lines. Resulting in the user having to scroll horizontally to see entire width of the text."
            },
            {
                queno:"que_7",
                que : "7) Which element denotes that the text is a short fragment of computer code?",
                options : [
                    {que_options:"<code>" , selected: false},
                    {que_options:"<data>", selected: false},
                    {que_options:"<cite>", selected: false},
                    {que_options:"<dfn>", selected: false}
                ],
                ans : "<code>",
                explanation:"Title of work is defined by <cite> tag. The <code> element displays its contents styles in a fashion intended to indicate that text is a short fragment of computer code. The content text is displayed using user agent’s default monospace font by default. <data> element links content with machine readable translation. Defining instance of a term in HTML is represented by <dfn> element."
            },
            {
                queno:"que_8",
                que : "8) Which element is used for bringing attention?",
                options : [
                    {que_options:"<cite>" , selected: false},
                    {que_options:"<br>", selected: false},
                    {que_options:"<b>", selected: false},
                    {que_options:"<code>", selected: false}
                ],
                ans : "<b>",
                explanation:"Title of work is defined by <cite> tag. <br> is used to give a vertical break in text/paragraph. The <code> element displays its contents styles in a fashion intended to indicate that text is a short fragment of computer code. <b> element is known as HTML Bring Attention To element. It is used to draw reader’s attention to the element’s contents, which are not granted special importance otherwise. Formally this was known as Boldface element."
            },
        ]
    },
    {
        _id:"Z979WQr82p",
        CategoryName:"HTML",
        CategoryType:"Responsive",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following is a server-side solution for implementing responsive images?",
                options : [
                    {que_options:"http://adaptive-images.com" , selected: false},
                    {que_options:"http://github.com/scottjehl/picturefill", selected: false},
                    {que_options:"http://www.netmagazine.com", selected: false},
                    {que_options:"http://offroadcode.com", selected: false}
                ],
                ans : "http://adaptive-images.com",
                explanation:"Instead of implementing ideal responsive image with <picture> element, we can use a server-side solution with Adaptive image i.e. http://adaptive-images.com/. It was created by Matt Wilcox (http://mattwilcox.net/)."
            },
            {
                queno:"que_2",
                que : "2) Which of the following is not included in the framework?",
                options : [
                    {que_options:"font sizes" , selected: false},
                    {que_options:"css reset", selected: false},
                    {que_options:"button styles", selected: false},
                    {que_options:"forms", selected: false}
                ],
                ans : "forms",
                explanation:"If we use the framework it can save a lot of time. Framework generally includes a width of the grid, button styles, CSS reset and many more other aspects to build a website."
            },
            {
                queno:"que_3",
                que : "3) How many columns are there in the basic grid of a skeleton?",
                options : [
                    {que_options:"17" , selected: false},
                    {que_options:"12", selected: false},
                    {que_options:"16", selected: false},
                    {que_options:"10", selected: false}
                ],
                ans : "12",
                explanation:"Skeleton is a minimal responsive framework. It is 960 pixels wide with 12 columns in its basic grid. The grid is responsive by integrating CSS3 media queries. It is also called the 960.gs framework. It is a good place for starting with the Grid System."
            },
            {
                queno:"que_4",
                que : "4) Linux does not have code editor ___________",
                options : [
                    {que_options:"Geany" , selected: false},
                    {que_options:"Gedit", selected: false},
                    {que_options:"BlueFish", selected: false},
                    {que_options:"WebMatrix", selected: false}
                ],
                ans : "WebMatrix",
                explanation:"Code editor is equipment for developing a website. There are many editors available in Windows, Linux and OS X. Linux has Geany, Gedit, BlueFish. Windows have WebMatrix, TextPad, Notepad++. OS X has MacVim, Brackets, TextWrangler."
            },
            {
                queno:"que_5",
                que : "5)  Adjacent sibling selector is defined with the notation _____________",
                options : [
                    {que_options:"#" , selected: false},
                    {que_options:"$", selected: false},
                    {que_options:"%", selected: false},
                    {que_options:"+", selected: false}
                ],
                ans : "+",
                explanation:"Adjacent sibling selector is defined with a plus (+) notation. It selects the element that directly follows the previous element that was specified. E.g. if we have <div> element that is followed by <p> element."
            },
            {
                queno:"que_6",
                que : "6) What should be the set value of the background-size property such that image will fit in the content area?",
                options : [
                    {que_options:"100%100%" , selected: false},
                    {que_options:"contain", selected: false},
                    {que_options:"cover", selected: false},
                    {que_options:"100%", selected: false}
                ],
                ans : "100%100%",
                explanation:" If the background-size property is set to “contain”, the background image will scale and will try to fit in the content area. Still, the image will keep its aspect ratio i.e. the proportional relationship between the image’s width and height."
            },
            {
                queno:"que_7",
                que : "7) Which plugin allows the element to become locked or sticky?",
                options : [
                    {que_options:".active" , selected: false},
                    {que_options:".alert", selected: false},
                    {que_options:".affix", selected: false},
                    {que_options:".alert-link", selected: false}
                ],
                ans : ".affix",
                explanation:".alert simply creates an alert message. Affix plugin allows an element to become affixed i.e. sticky or locked to an area on the page. It toggles position:fixed on and off, .alert-link is used on links inside alerts to add matching colored links."
            },
            {
                queno:"que_8",
                que : "8) What clears floats?",
                options : [
                    {que_options:".close" , selected: false},
                    {que_options:".clearfix", selected: false},
                    {que_options:".checkbox", selected: false},
                    {que_options:".col-*-*", selected: false}
                ],
                ans : ".clearfix",
                explanation:".clearfix clears floats, .close indicates a close icon, .checkbox ia a container for checkboxes, .col-*-* is a responsive grid (span 1-12 column), extra small devices phones (<786px), tablets (>=786px), medium devices desktops (>=992px), large devices desktops (>=1200px)."
            },
        ]
    },
    {
        _id:"Z97944r82p",
        CategoryName:"HTML",
        CategoryType:"Web Storage",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Before HTML5 where data had to be stored?",
                options : [
                    {que_options:"cookies" , selected: false},
                    {que_options:"browser", selected: false},
                    {que_options:"only in Internet Explorer", selected: false},
                    {que_options:"only in Chrome", selected: false}
                ],
                ans : "cookies",
                explanation:"When HTML5 was not introduced application data had to store in cookies when server requested for it. Web storage was secure then as well as large data could be stored even it does not affect performance. After coming of HTML5 web applications can store data within the browser that the user is using."
            },
            {
                queno:"que_2",
                que : "2) In localStorage object data ________",
                options : [
                    {que_options:"is deleted after the browser has been closed" , selected: false},
                    {que_options:"is not deleted after the browser has been closed", selected: false},
                    {que_options:"can be seen but can not edit", selected: false},
                    {que_options:"can be seen as well as edit", selected: false}
                ],
                ans : "is not deleted after the browser has been closed",
                explanation:" Data with no expiration date is stored by localStorage object. Here the data is not deleted if we close the browser. We can have data at the next day or week or year"
            },
            {
                queno:"que_3",
                que : "3) In sessionStorage object data __________",
                options : [
                    {que_options:"is not deleted after the browser has been closed" , selected: false},
                    {que_options:"can be seen but can’t edit", selected: false},
                    {que_options:"can be seen as well as edit", selected: false},
                    {que_options:"is deleted after the browser has been closed", selected: false}
                ],
                ans : "is deleted after the browser has been closed",
                explanation:"sessionStorage object works same as localStorage object except the data is stored for one session only. When the use closes the browser the data is deleted."
            },
            {
                queno:"que_4",
                que : "4) What is the limit of character storage for chrome 23.0 in localStorage?",
                options : [
                    {que_options:"unlimited" , selected: false},
                    {que_options:"none", selected: false},
                    {que_options:"1021 k", selected: false},
                    {que_options:"4.98 M", selected: false}
                ],
                ans : "none",
                explanation:"We can’t store any character in localStorage in chrome 23.0, for chrome 18.0 it is unlimited i.e. can store any number of characters, for chrome 19.77 it is 1021 k, for chrome 22.0 it is 2.49 M, for chrome 24.0, 25.0, 27.0 it is 2.49 M, for chrome 28.0, 30.0, 31.0 and 31.1 it is 4.98 M."
            },
            {
                queno:"que_5",
                que : "5) What is the limit of character storage for chrome 23.0 in sessionStorage?",
                options : [
                    {que_options:"510 k" , selected: false},
                    {que_options:"unlimited", selected: false},
                    {que_options:"1021 k", selected: false},
                    {que_options:"2.49 M", selected: false}
                ],
                ans : "510 k",
                explanation:" We can store 510 k characters in sessionStorage in chrome 23.0, for chrome 18.0 and chrome 24.0 we can store unlimited characters, for chrome 19.77 its value is 1021 k, for chrome 25.0 and 27.0 it is 2.49 M, for chrome 28.0, 30.0, 31.0, 31.1 its value is 4.98 M."
            },
            {
                queno:"que_6",
                que : "6) Which of the following returns a number of value pairs?",
                options : [
                    {que_options:"storage.key(n)" , selected: false},
                    {que_options:"storage.length", selected: false},
                    {que_options:"storage.setItem(key,value)", selected: false},
                    {que_options:"storage.clear()", selected: false}
                ],
                ans : "storage.length",
                explanation:"storage.length returns number of value pairs that are currently present in the list, storage.key(n) returns name of nth key from the list, storagesetItem(key,value) sets the value which is identified by key to value, storage.clear() empties the list which is associated with values."
            },
            {
                queno:"que_7",
                que : "7) Which of the following is invoked when it is not fired on window object?",
                options : [
                    {que_options:"removeItem()" , selected: false},
                    {que_options:"clear()", selected: false},
                    {que_options:"setItem()", selected: false},
                    {que_options:"getItem()", selected: false}
                ],
                ans : "getItem()",
                explanation:"When removeItem(), clear() and setItem() are invoked the events are fired on window object, which accesses newly stored or removed data, as defined by LocalStorage and sessionStorage attributes, getItem(key) method returns the current value associated with the key."
            },
            {
                queno:"que_8",
                que : "8) Which of the following is not the storageEvent interface?",
                options : [
                    {que_options:"event.newValue" , selected: false},
                    {que_options:"event.url", selected: false},
                    {que_options:"event.key", selected: false},
                    {que_options:"event.clear", selected: false}
                ],
                ans : "event.clear",
                explanation:"There are many storgeEvent interfaces like event.key, event.newValue, event.url, event.oldValue, event.storageArea. Event.key returns the key if the storage item is changed, event.oldValue and event.newValue returns old value and the new value of the key whose value has been changed. Event.url returns the URL of a document which has been changed."
            },
        ]
    },
    {
        _id:"1249CCrI2K",
        CategoryName:"HTML",
        CategoryType:"Beyond Markup",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following is not example of block element?",
                options : [
                    {que_options:"<h1>" , selected: false},
                    {que_options:"<ul>", selected: false},
                    {que_options:"<p>", selected: false},
                    {que_options:"<a>", selected: false}
                ],
                ans : "<a>",
                explanation:"The elements which always appear to start on a new line in browser are known as block level elements. Examples are <h1>,<ul>,<li> and <p>."
            },
            {
                queno:"que_2",
                que : "2) What does semantic markup not define?",
                options : [
                    {que_options:"provides extra information" , selected: false},
                    {que_options:"where an emphasis is placed in a sentence", selected: false},
                    {que_options:"meaning of an acronym", selected: false},
                    {que_options:"that describes paragraphs", selected: false}
                ],
                ans : "that describes paragraphs",
                explanation:"< Semantic markup> which provides extra information, such as where emphasis is placed in a sentence, that something you have written is a quotation, the meaning of acronyms etc."
            },
            {
                queno:"que_3",
                que : "3) For writing chemical formula of water which tag will be used?",
                options : [
                    {que_options:"<sup>" , selected: false},
                    {que_options:"<sub>", selected: false},
                    {que_options:"<br/>", selected: false},
                    {que_options:"<ul>", selected: false}
                ],
                ans : "<sub>",
                explanation:"The <sub> element is used to contain characters that should be subscript. It is commonly used with foot notes or chemical formulas. E.g. H20, <sup> is use for superscript, <br> is for horizontal break, <ul> is for unordered list."
            },
            {
                queno:"que_4",
                que : "4) which tag will be used For raising number to a power?",
                options : [
                    {que_options:"<sup>" , selected: false},
                    {que_options:"<sub>", selected: false},
                    {que_options:"<br/>", selected: false},
                    {que_options:"<ul>", selected: false}
                ],
                ans : "<sup>",
                explanation:"The <sup> element is used to contain characters that should be superscript. It is commonly used with foot notes or chemical formulae. E.g. X2 , <br> is for break, <ul> is for unordered list."
            },
            {
                queno:"que_5",
                que : "5) Which attribute is not essential under <iframe>?",
                options : [
                    {que_options:"src" , selected: false},
                    {que_options:"height", selected: false},
                    {que_options:"width", selected: false},
                    {que_options:"frameborder", selected: false}
                ],
                ans : "<sup>",
                explanation:"An iframe is equivalent to a window that has been cut into our page, it is created using <iframe> element. Src, height, width attribute are essentially used inside of this. Src attribute specifies the URL of the page which is to be shown. Height and width specify the height and width of an iframe in pixels."
            },
            {
                queno:"que_6",
                que : "6) Copyright symbol can be included by _________?",
                options : [
                    {que_options:"&lt" , selected: false},
                    {que_options:"&copy", selected: false},
                    {que_options:"&amp", selected: false},
                    {que_options:"&gt", selected: false}
                ],
                ans : "&copy",
                explanation:" HTML code has some characters that are reserved so for using those on the page one need to know “escape” characters. If you want to add a copyright symbol to the web page they can use &copy or &#169."
            },
            {
                queno:"que_7",
                que : "7) Attributes that allow to identify particular element are ____________?",
                options : [
                    {que_options:"<div> and <span>" , selected: false},
                    {que_options:"<meta>", selected: false},
                    {que_options:"id and class", selected: false},
                    {que_options:"<iframes>", selected: false}
                ],
                ans : "id and class",
                explanation:"The id and class attributes are useful in identifying particular elements. <iframe> element is for creating frames in web page, <div> and <span> are inline elements, metadata is provided by <meta> tag."
            }, 
            {
                queno:"que_8",
                que : "8) Which is not the attribute of <meta> element?",
                options : [
                    {que_options:"description" , selected: false},
                    {que_options:"keywords", selected: false},
                    {que_options:"robots", selected: false},
                    {que_options:"seamless", selected: false}
                ],
                ans : "seamless",
                explanation:"<meta> element contains information about web page. Description attribute contains the description of the web page, keywords contains the list of comma separated words, robots decide to add pages to search results."
            },       
        ]
    },
    {
        _id:"15545I20",
        CategoryName:"HTML",
        CategoryType:"Responsive - 1",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) How many glyphs does bootstrap include?",
                options : [
                    {que_options:"369" , selected: false},
                    {que_options:"360", selected: false},
                    {que_options:"260", selected: false},
                    {que_options:"100", selected: false}
                ],
                ans : "260",
                explanation:"Bootstrap includes 260 glyphs from Glyphicon Halflings set. They are normally not available for free, but their creator has made them available for Bootstrap free of cost."
            }, 
            {
                queno:"que_2",
                que : "2) Which of the following allows an element to lock to an area on the page?",
                options : [
                    {que_options:"affix" , selected: false},
                    {que_options:"alert", selected: false},
                    {que_options:"popover", selected: false},
                    {que_options:"tooltip", selected: false}
                ],
                ans : "affix",
                explanation:"The affix plugin allows an element to become affixed (locked) to an area on the page. It is often used with navigation menus or social icon buttons, to make them “stick” to the specific area while scrolling up and down the page. An alert message box is created on window by alert element. popover box displays when user clicks on that element. Tootlip is popoup box which appears when user hovers the mouse pointer on it."
            },
            {
                queno:"que_3",
                que : "3) The default value for an interval is __________",
                options : [
                    {que_options:"4000" , selected: false},
                    {que_options:"5000", selected: false},
                    {que_options:"1000", selected: false},
                    {que_options:"2390", selected: false}
                ],
                ans : "5000",
                explanation:"interval specifies the delay in milliseconds between each slide, we can set the interval to false to stop items from automatically sliding, its default value is 5000. The set value should be number or Boolean false."
            }, 
            {
                queno:"que_4",
                que : "4) What is the default value of offset?",
                options : [
                    {que_options:"20" , selected: false},
                    {que_options:"10", selected: false},
                    {que_options:"30", selected: false},
                    {que_options:"50", selected: false}
                ],
                ans : "10",
                explanation:"The default value of offset is 10, it specifies number of pixels to offset from top when calculating the position of scroll."
            },
            {
                queno:"que_5",
                que : "5) Progress bars are not supported in ______________",
                options : [
                    {que_options:"Internet Explorer 10" , selected: false},
                    {que_options:"Internet Explorer 9", selected: false},
                    {que_options:"Opera", selected: false},
                    {que_options:"Chrome", selected: false}
                ],
                ans : "Internet Explorer 9",
                explanation:"Progress bars are not supported in Internet Explorer 9 and earlier versions, because they use CSS3 transitions and animations to achieve some of the effects. For improving accessibility for people using screen readers, we should include aria-* attributes."
            },
            {
                queno:"que_6",
                que : "6) What is the range of dimension for small devices?",
                options : [
                    {que_options:"450px to 700px" , selected: false},
                    {que_options:"768px to 991px", selected: false},
                    {que_options:"992px to 1199px", selected: false},
                    {que_options:"120px to 500px", selected: false}
                ],
                ans : "768px to 991px",
                explanation:"Small devices are defined as a screen width from 768px to 991px. For small devices we use the class .col-sm-*, for medium devices the screen width from 992px to 1199px."
            }, 
            {
                queno:"que_7",
                que : "7) Which value specifies transition acceleration?",
                options : [
                    {que_options:"timing-function" , selected: false},
                    {que_options:"property", selected: false},
                    {que_options:"transition-duration", selected: false},
                    {que_options:"delay", selected: false}
                ],
                ans : "timing-function",
                explanation:"The value of transition-function specifies transition acceleration. There are five predefined acceleration types that we can use. They are ease-in, ease, ease-out, ease-in-out and linear. property value specifies name for CSS transition effect. The value of transition-duration specifies a length of the transition effect. The delay in transition effect is give by delay value."
            },
            {
                queno:"que_8",
                que : "8) Which is not a color function?",
                options : [
                    {que_options:"lighten()" , selected: false},
                    {que_options:"fade()", selected: false},
                    {que_options:"darken()", selected: false},
                    {que_options:"opaque()", selected: false}
                ],
                ans : "opaque()",
                explanation:"LESS provides few functions for adjusting colors. Some of the functions are darken(@color, n%), lighten(@color, n%), fade(@color, n%). Lighten makes the color lighter than its initial value, fade lowers the color density, darken makes the color darker than its initial value."
            },    
        ]
    },
    {
        _id:"15567990",
        CategoryName:"HTML",
        CategoryType:"Layout",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following works as a sidebar?",
                options : [
                    {que_options:"<aside>" , selected: false},
                    {que_options:"<footer>", selected: false},
                    {que_options:"<details>", selected: false},
                    {que_options:"<section>", selected: false}
                ],
                ans : "<aside>",
                explanation:"<aside> defines content aside from the content like a sidebar, <footer> defines a footer for a document or a section, <details> defines additional details, <section> defines a section in a document."
            },
            {
                queno:"que_2",
                que : "2) Which of the following can’t be the value of float property?",
                options : [
                    {que_options:"left" , selected: false},
                    {que_options:"right", selected: false},
                    {que_options:"center", selected: false},
                    {que_options:"inherit", selected: false}
                ],
                ans : "center",
                explanation:"float property can have the property left, right, none, inherit. When set to inherit value the element inherits the float value of its parent, when set to none property the element does not float, it is the default value."
            },  
            {
                queno:"que_3",
                que : "3) Which of the following can’t be the value of a clear property?",
                options : [
                    {que_options:"left" , selected: false},
                    {que_options:"inherit", selected: false},
                    {que_options:"right", selected: false},
                    {que_options:"center", selected: false}
                ],
                ans : "center",
                explanation:"clear property specifies what elements can float beside cleared element and on which side. It can hold the values none, left, right, both and inherit. The inherit property inherits the clear value of its parent when setting to both no floating elements allowed on either the left and right side."
            },
            {
                queno:"que_4",
                que : "4) Which of the following specifies what happens if content overflow an element’s box?",
                options : [
                    {que_options:"overflow" , selected: false},
                    {que_options:"overflow-x", selected: false},
                    {que_options:"overflow-y", selected: false},
                    {que_options:"float", selected: false}
                ],
                ans : "overflow",
                explanation:"overflow property specifies what happens if content overflows an element’s box, overflow-x specifies what to do with left/right edges of the content if it overflows the element’s content area, overflow-y specifies what to do with top/bottom edges of the content if it overflows the element’s content area."
            },
            {
                queno:"que_5",
                que : "5) Which of the following was not previous layout mode?",
                options : [
                    {que_options:"Block" , selected: false},
                    {que_options:"Flexbox layout", selected: false},
                    {que_options:"Inline", selected: false},
                    {que_options:"Positioned", selected: false}
                ],
                ans : "Flexbox layout",
                explanation:"Before Flexbox layout module there were four layout modes. Block, Inline, Table, Positioned. Block is for sections in a webpage, inline is for text, table is for two dimensional table data, positioned is for explicit position of an element."
            },
            {
                queno:"que_6",
                que : "6) Which property defines in which direction the container wants to stack flex items?",
                options : [
                    {que_options:"flex-flow" , selected: false},
                    {que_options:"flex-wrap", selected: false},
                    {que_options:"flex-direction", selected: false},
                    {que_options:"align-content", selected: false}
                ],
                ans : "flex-direction",
                explanation:"flex-direction property defines in which direction the container wants to stack the flex items, the flex-flow property is shorthand property for setting both flex-direction and flex-wrap properties. For deciding whether the flexible items should wrap or not, flex-wrap property is used."
            },
            {
                queno:"que_7",
                que : "7) Which property is used to align flex items?",
                options : [
                    {que_options:"align-items" , selected: false},
                    {que_options:"justify-content", selected: false},
                    {que_options:"align-content", selected: false},
                    {que_options:"flex-grow", selected: false}
                ],
                ans : "justify-content",
                explanation:"justify-content property is used to align flex items, the align-items property is used to align flex items vertically, the align-content property is used to align flex lines, flex-grow specifies how much a flex item will grow relative to rest of flex items."
            },
            {
                queno:"que_8",
                que : "8) Which of the following specifies initial length of flex item?",
                options : [
                    {que_options:"flex-flow" , selected: false},
                    {que_options:"flex-grow", selected: false},
                    {que_options:"flex-shrink", selected: false},
                    {que_options:"flex-basis", selected: false}
                ],
                ans : "flex-basis",
                explanation:"flex-basis property specifies the initial length of the flex item, flex-shrink property specifies how much a flex item will shrink relative to rest of flex items, the value must be a number and a default value is 1. The flexible-grow property is a relative comparison between the items. It decides how much item will grow relative to the rest of flexible items inside the same container."
            },    
        ]
    },
    {
        _id:"Y55OO4799Z",
        CategoryName:"HTML",
        CategoryType:"Canvas",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following element is used for canvas graphics?",
                options : [
                    {que_options:"<paint>" , selected: false},
                    {que_options:"<canvas>", selected: false},
                    {que_options:"<graphic>", selected: false},
                    {que_options:"<css>", selected: false}
                ],
                ans : "<canvas>",
                explanation:"CSS i.e. Cascading Style Sheet is a scripting language. Canvas graphics is introduced in HTML5. Element used for canvas graphics is <canvas>. The HTML canvas element is used to draw graphics, on the fly, via scripting (usually JavaScript)."
            },
            {
                queno:"que_2",
                que : "2) Which of the following statement is not true?",
                options : [
                    {que_options:"SVG stands for Scalable Vector Graphics" , selected: false},
                    {que_options:"SVG is used to define graphics for the Web", selected: false},
                    {que_options:"SVG is a W3C recommendation", selected: false},
                    {que_options:"SVG doesn’t support event handlers", selected: false}
                ],
                ans : "SVG doesn’t support event handlers",
                explanation:"SVG stands for “Scalable Vector Graphics”, it is used to draw graphics for the web. W3C recommends SVG graphics. SVG also supports event handlers which is not supported in canvas."
            },
            {
                queno:"que_3",
                que : "3) To draw on the canvas, authors must first obtain a reference to a context using the ______________ method of the canvas interface element.",
                options : [
                    {que_options:"getImageData" , selected: false},
                    {que_options:"toDataURL", selected: false},
                    {que_options:"getContext", selected: false},
                    {que_options:"restore", selected: false}
                ],
                ans : "getContext",
                explanation:"The method getImageData(), returns an imageData that copies pixel data for a specified thing in canvas. ContextType is a DOMString containing the context identifier defining the drawing context associated to the canvas."
            },
            {
                queno:"que_4",
                que : "4) The ___________ method must add the scaling transformation described by the arguments to the transformation matrix.",
                options : [
                    {que_options:"scale(x, y)" , selected: false},
                    {que_options:"translate(x, y)", selected: false},
                    {que_options:"rotate(angle)", selected: false},
                    {que_options:"skew(x,y)", selected: false}
                ],
                ans : "scale(x, y)",
                explanation:"HTML5 canvas provides scale(x, y) method which is used to increase or decrease the units in our canvas grid. The position (0, 0) is remaped in canvas by translate(x, y) method. If one want to rotate the current drawing then rotate(angle) method can be used."
            },
            {
                queno:"que_5",
                que : "5) Which method must clear the pixels in the specified rectangle that also intersects the current clipping region to a fully transparent black, erasing any previous image?",
                options : [
                    {que_options:"strokeRect(x, y, w, h)" , selected: false},
                    {que_options:"clearRect(x, y, w, h)", selected: false},
                    {que_options:"fillRect(x, y, w, h)", selected: false},
                    {que_options:"removeRect(x,y,w,h)", selected: false}
                ],
                ans : "clearRect(x, y, w, h)",
                explanation:"StrokeRect(x, y, w, h) draws rectangle without filling it. The clearRect() method clears the specified pixels within a given rectangle. FillRect(x, y, w, h) method draws filled rectangle."
            }, 
            {
                queno:"que_6",
                que : "6) When the _____________ method is passed an animated image as its image argument, the user agent must use the poster frame of the animation, or, if there is no poster frame, the first frame of the animation.",
                options : [
                    {que_options:"measureText()" , selected: false},
                    {que_options:"imageData()", selected: false},
                    {que_options:"drawImage()", selected: false},
                    {que_options:"setImage()", selected: false}
                ],
                ans : "drawImage()",
                explanation:"The width of specified text present in an object is given by measureText() method. The drawImage() method draws an image, canvas, or video onto the canvas. ImageData() method provides image data in pixels in canvas."
            },
            {
                queno:"que_7",
                que : "7) The ____________ method must create a new clipping region by calculating the intersection of the current clipping region and the area described by the current path, using the non-zero winding number rule.",
                options : [
                    {que_options:"fill()" , selected: false},
                    {que_options:"stroke()", selected: false},
                    {que_options:"clip()", selected: false},
                    {que_options:"get()", selected: false}
                ],
                ans : "clip()",
                explanation:"The path one defines is drawn by stroke() method. Any region/shape or size in canvas is clipped by clip(). The fill() method fills the current drawing (path). The default color is black. There is no method like get()."
            },
            {
                queno:"que_8",
                que : "8) The ____________ method must fill all the subpaths of the current path, using fillStyle, and using the non-zero winding number rule.",
                options : [
                    {que_options:"fill()" , selected: false},
                    {que_options:"stroke()", selected: false},
                    {que_options:"clip()", selected: false},
                    {que_options:"get()", selected: false}
                ],
                ans : "fill()",
                explanation:"The path one defines is drawn by stroke() method. Any region/shape or size in canvas is clipped by clip(). The fill() method fills the current drawing (path). The default color is black. There is no method like get()."
            },          
        ]
    },
    //css
    {
        _id:"css1111",
        CategoryName:"CSS",
        CategoryType:"Selectors",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following selector selects all elements of E that have the attribute attr that end with the given value?",
                options : [
                    {que_options:"E[attr^=value]" , selected: false},
                    {que_options:"E[attr$=value]", selected: false},
                    {que_options:"E[attr*=value]", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "E[attr$=value]",
                explanation:"p[title$=`!`] {color: red;}"
            },
            {
                queno:"que_2",
                que : "2) Which of the following selector selects the elements that are checked?",
                options : [
                    {que_options:"E ~ F" , selected: false},
                    {que_options:"::after", selected: false},
                    {que_options:":checked", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : ":checked",
                explanation:"checked {color: blue;}"
            },
            {
                queno:"que_3",
                que : "3) Which of the following selector selects the elements that are the default among a set of similar elements?",
                options : [
                    {que_options:":default" , selected: false},
                    {que_options:":%", selected: false},
                    {que_options:":disabled", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : ":default",
                explanation:"default {background-color: red;}"
            },
            {
                queno:"que_4",
                que : "4) Which of the following selector selects the elements that are currently enabled?",
                options : [
                    {que_options:":element" , selected: false},
                    {que_options:":empty", selected: false},
                    {que_options:":enabled", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : ":enabled",
                explanation:"input:enabled {background-color:white;}"
            },
            {
                queno:"que_5",
                que : "5) Which of the following selector selects the element that is the first child of its parent that is of its type?",
                options : [
                    {que_options:":first-of-type" , selected: false},
                    {que_options:":last-child", selected: false},
                    {que_options:"::first-line", selected: false},
                    {que_options:"::first-letter", selected: false}
                ],
                ans : ":first-of-type",
                explanation:"strong:first-of-type {font-size:bigger;}"
            },
            {
                queno:"que_6",
                que : "6) Which of the following selector selects an element if it’s the only child of its parent?",
                options : [
                    {que_options:":root" , selected: false},
                    {que_options:":nth-oftype(n)", selected: false},
                    {que_options:":only-child", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans :":only-child",
                explanation:"h1:only-child {color: blue;}"
            },
            {
                queno:"que_7",
                que : "7) Which of the following selector selects the element that is the target of a referring URI?",
                options : [
                    {que_options:":target" , selected: false},
                    {que_options:":selection", selected: false},
                    {que_options:"::selection", selected: false},
                    {que_options:":URI", selected: false}
                ],
                ans :":target",
                explanation:"target{color:red;}"
            },
            {
                queno:"que_8",
                que : "8)  Which of the following selector applies styles to elements that are valid per HTML5 validations set either with the pattern or type attributes?",
                options : [
                    {que_options:":valid" , selected: false},
                    {que_options:":required", selected: false},
                    {que_options:":optional", selected: false},
                    {que_options:":invalid", selected: false}
                ],
                ans :":valid",
                explanation:"valid {color: green;}"
            },     
        ]
    },
    {
        _id:"css2222",
        CategoryName:"CSS",
        CategoryType:"Transforms and Transitions",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following property defines the length of time that a transition takes?",
                options : [
                    {que_options:"transition" , selected: false},
                    {que_options:"transition-duration", selected: false},
                    {que_options:"transform-duration", selected: false},
                    {que_options:"transition-property", selected: false}
                ],
                ans : "transition-duration",
                explanation:"None"
            },
            {
                queno:"que_2",
                que : "2) Which of the following property defines when the transition will start and it allows a transition to begin execution some some period of time from when it is applied?",
                options : [
                    {que_options:"transform-delay" , selected: false},
                    {que_options:"transition-delay", selected: false},
                    {que_options:"transform-duration", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "transition-delay",
                explanation:"None"
            },
            {
                queno:"que_3",
                que : "3) Which of the following transform property value defines a 2D translation?",
                options : [
                    {que_options:"translate(x,y)" , selected: false},
                    {que_options:"translate2d(x,y)", selected: false},
                    {que_options:"translate3d(x,y)", selected: false},
                    {que_options:"all of the mentioned", selected: false}
                ],
                ans : "translate(x,y)",
                explanation:"None"
            },
            {
                queno:"que_4",
                que : "4) Which of the following transform property value defines a translation, using only the value for the X-axis?",
                options : [
                    {que_options:"translate(x)" , selected: false},
                    {que_options:"translateZ(x)", selected: false},
                    {que_options:"translateY(x)", selected: false},
                    {que_options:"translateX(x)", selected: false}
                ],
                ans : "translateX(x)",
                explanation:"None"
            },
            {
                queno:"que_5",
                que : "5) Which of the following transform property value defines a 3D scale transformation?",
                options : [
                    {que_options:"circle(x,y,z)" , selected: false},
                    {que_options:"scale3d(x,y,z)", selected: false},
                    {que_options:"rotate3d(x,y,z,angle)", selected: false},
                    {que_options:"rotate(angle)", selected: false}
                ],
                ans : "scale3d(x,y,z)",
                explanation:"None"
            }, 
            {
                queno:"que_6",
                que : "6) Which of the following transform property value defines a 2D skew transformation along the X- and the Y-axis?",
                options : [
                    {que_options:"skewX(angle)" , selected: false},
                    {que_options:"skewY(angle)", selected: false},
                    {que_options:"skew(x-angle,y-angle)", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "skew(x-angle,y-angle)",
                explanation:"None"
            },
            {
                queno:"que_7",
                que : "7) Which of the following transform property value defines a 3D rotation along the Z-axis?",
                options : [
                    {que_options:"rotate-Z(angle)" , selected: false},
                    {que_options:"rotate-Z-axis(angle)", selected: false},
                    {que_options:"rotateZ(angle)", selected: false},
                    {que_options:"all of the mentioned", selected: false}
                ],
                ans : "rotateZ(angle)",
                explanation:"None"
            },
            {
                queno:"que_8",
                que : "8) Which of the following transform property value defines a 3D rotation?",
                options : [
                    {que_options:"rotate3d(x,y,z,angle)" , selected: false},
                    {que_options:"rotated(x,y,z,angle)", selected: false},
                    {que_options:"rotate-all(x,y,z,angle)", selected: false},
                    {que_options:"rotate(x,y,z,angle)", selected: false}
                ],
                ans : "rotate3d(x,y,z,angle)",
                explanation:"None"
            },     
        ]
    },
    {
        _id:"css3333",
        CategoryName:"CSS",
        CategoryType:"Box Model",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following property adds padding to the top of an element?",
                options : [
                    {que_options:"height" , selected: false},
                    {que_options:"padding-height", selected: false},
                    {que_options:"top", selected: false},
                    {que_options:"padding-top", selected: false}
                ],
                ans : "padding-top",
                explanation:"Self-explainatory"
            },
            {
                queno:"que_2",
                que : "2) Which of the following display property value is described by treats the element as inline?",
                options : [
                    {que_options:"inline-block" , selected: false},
                    {que_options:"list-item", selected: false},
                    {que_options:"block", selected: false},
                    {que_options:"inline", selected: false}
                ],
                ans : "inline",
                explanation:"Self-explainatory"
            },
            {
                queno:"que_3",
                que : "3) Which of the following property defines the style for the bottom border of an element?",
                options : [
                    {que_options:"border-bottom-style" , selected: false},
                    {que_options:"border-collapse", selected: false},
                    {que_options:"border-style-bottom", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "border-bottom-style",
                explanation:"Self-explainatory"
            },
            {
                queno:"que_4",
                que : "4) Which of the following property defines the style for the left border of an element?",
                options : [
                    {que_options:"border-style" , selected: false},
                    {que_options:"border-left-style", selected: false},
                    {que_options:"border-left-width", selected: false},
                    {que_options:"border-right", selected: false}
                ],
                ans : "border-left-style",
                explanation:"Self-explainatory"
            },
            {
                queno:"que_5",
                que : "5) Which of the following visibility property value is described by The element is not visible, but the layout of surrounding elements is not affected?",
                options : [
                    {que_options:"visible" , selected: false},
                    {que_options:"hidden", selected: false},
                    {que_options:"collapse", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "hidden",
                explanation:"Self-explainatory"
            },
            {
                queno:"que_6",
                que : "6) Which of the following display property value is described by used internally by browsers to create list items. Of no practical value to web designers?",
                options : [
                    {que_options:"inline-block" , selected: false},
                    {que_options:"list-item", selected: false},
                    {que_options:"group", selected: false},
                    {que_options:"none", selected: false}
                ],
                ans : "list-item",
                explanation:"Self-explainatory"
            }, 
            {
                queno:"que_7",
                que : "7) Which of the following property controls the horizontal overflow of a block or inline block?",
                options : [
                    {que_options:"overflow-x" , selected: false},
                    {que_options:"overflow", selected: false},
                    {que_options:"overflow-y", selected: false},
                    {que_options:"overflow-k", selected: false}
                ],
                ans : "overflow-x",
                explanation:"Self-explainatory"
            }, 
            {
                queno:"que_8",
                que : "8) Which of the following Overflow property value is described by scrollbars should be provided if the content is too big, but actual implementation is left up to the browser?",
                options : [
                    {que_options:"visible" , selected: false},
                    {que_options:"scroll", selected: false},
                    {que_options:"auto", selected: false},
                    {que_options:"hidden", selected: false}
                ],
                ans : "auto",
                explanation:"Self-explainatory"
            },
        ]
    },
    {
        _id:"css4444",
        CategoryName:"CSS",
        CategoryType:"Media Types",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) What does all media type is used for?",
                options : [
                    {que_options:"For use with all devices" , selected: false},
                    {que_options:"For use with speech synthesizers", selected: false},
                    {que_options:"For use with handheld devices", selected: false},
                    {que_options:"For use with tactile Braille devices", selected: false}
                ],
                ans : "For use with all devices",
                explanation:"None"
            },
            {
                queno:"que_2",
                que : "2) What does projection media type is used for?",
                options : [
                    {que_options:"For use with projected media (direct computer-to-projector presentations), or printing transparencies for projection." , selected: false},
                    {que_options:"For use with color computer screens", selected: false},
                    {que_options:"For use with handheld devices", selected: false},
                    {que_options:"For use with television-type devices", selected: false}
                ],
                ans : "For use with projected media (direct computer-to-projector presentations), or printing transparencies for projection.",
                explanation:"None"
            },
            {
                queno:"que_3",
                que : "3) What does tty media type is used for ?",
                options : [
                    {que_options:"For use with low-resolution teletypes, terminals, or other devices with limited display capabilities." , selected: false},
                    {que_options:"For use with Braille printers.", selected: false},
                    {que_options:"For use with speech synthesizers.", selected: false},
                    {que_options:"For use with projected media (direct computer-to-projector presentations), or printing transparencies for projection.", selected: false}
                ],
                ans : "For use with low-resolution teletypes, terminals, or other devices with limited display capabilities.",
                explanation:"None"
            },
            {
                queno:"que_4",
                que : "4) What does braille media type is used for?",
                options : [
                    {que_options:"For use with all devices" , selected: false},
                    {que_options:"For use with speech synthesizers", selected: false},
                    {que_options:"For use with handheld devices", selected: false},
                    {que_options:"For use with tactile Braille devices", selected: false}
                ],
                ans : "For use with speech synthesizers",
                explanation:"None"
            },
            {
                queno:"que_5",
                que : "5) The __________ rule makes it possible to define different style rules for different media types in the same stylesheet.",
                options : [
                    {que_options:"audio/video" , selected: false},
                    {que_options:"sink", selected: false},
                    {que_options:"@media", selected: false},
                    {que_options:"@canvas", selected: false}
                ],
                ans : "@media",
                explanation:"None"
            },
            {
                queno:"que_6",
                que : "6) If an @media/@import rule contains a malformed media type (not an identifier) then the statement is valid. State true or false.",
                options : [
                    {que_options:"True" , selected: false},
                    {que_options:"False", selected: false},
                ],
                ans : "False",
                explanation:"@media and @import rules with unknown media types (that are nonetheless valid identifiers) are treated as if the unknown media types are not present. If an @media/@import rule contains a malformed media type (not an identifier) then the statement is invalid."
            },
            {
                queno:"que_7",
                que : "7) Media type names are case-insensitive. State true or false.",
                options : [
                    {que_options:"True" , selected: false},
                    {que_options:"False", selected: false},
                ],
                ans : "True",
                explanation:"None"
            },
            {
                queno:"que_8",
                que : "8)  ____________ types are mutually exclusive in the sense that a user agent can only support one media type when rendering a document.",
                options : [
                    {que_options:"tv" , selected: false},
                    {que_options:"tty", selected: false},
                    {que_options:"media" , selected: false},
                    {que_options:"audio", selected: false},
                ],
                ans : "True",
                explanation:"Media types are mutually exclusive in the sense that a user agent can only support one media type when rendering a document. However, user agents may use different media types on different canvases. For example, a document may (simultaneously) be shown in ‘screen’ mode on one canvas and ‘print’ mode on another canvas."
            },
        ]
    },
    {
        _id:"css5555",
        CategoryName:"CSS",
        CategoryType:"Form Elements",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which property is used to add space inside the text field?",
                options : [
                    {que_options:"padding" , selected: false},
                    {que_options:"margin", selected: false},
                    {que_options:"number", selected: false},
                    {que_options:"password", selected: false}
                ],
                ans : "padding",
                explanation:"Padding property is used to add space inside the text field, when we have many inputs after each other we can also add some margin to add more space outside,"
            },
            {
                queno:"que_2",
                que : "2) Which one can animate the width of search input when get focus?",
                options : [
                    {que_options:"focus" , selected: false},
                    {que_options:"transition", selected: false},
                    {que_options:"outline", selected: false},
                    {que_options:"color", selected: false}
                ],
                ans : "transition",
                explanation:"For animating the width of search input when it gets focus we used CSS transition property,"
            },
            {
                queno:"que_3",
                que : "3) Which of the following will insert generated content in the counter?",
                options : [
                    {que_options:"content" , selected: false},
                    {que_options:"counter-reset", selected: false},
                    {que_options:"counter-increment", selected: false},
                    {que_options:"counter()", selected: false}
                ],
                ans : "content",
                explanation:"content inserts generated content, counter-reset creates or resets a counter, counter-increment increments the value of the counter, counter() function adds the value of a counter to an element."
            },
            {
                queno:"que_4",
                que : "4) Which of the following is not the pseudo class for CSS Basic UI Level3?",
                options : [
                    {que_options:":optional" , selected: false},
                    {que_options:":read-only", selected: false},
                    {que_options:":valid", selected: false},
                    {que_options:":checked", selected: false}
                ],
                ans : ":checked",
                explanation:"CSS Basic UI Level 3 has many pseudo-classes like :widget, :invalid, :valid, :in-range, :required, :read-write, :read-only, :optional, :out-of-range. CSS Selector Level 3 has the classes :disabled, :enabled, :indeterminate, :checked."
            },
            {
                queno:"que_5",
                que : "5) Which of the following helps to deal with HTML5 support?",
                options : [
                    {que_options:"Twitter Bootstrap" , selected: false},
                    {que_options:"WebShim", selected: false},
                    {que_options:"jQuery UI", selected: false},
                    {que_options:"Niceforms", selected: false}
                ],
                ans : "WebShim",
                explanation:"WebShim is a big tool that can help with browser HTML5 support, web form part can be very helpful. If you want to normalize forms Twitter Bootstrap can greatly help."
            },
            {
                queno:"que_6",
                que : "6) Which is not a WebKit value?",
                options : [
                    {que_options:"push-button" , selected: false},
                    {que_options:"menulist", selected: false},
                    {que_options:"radio", selected: false},
                    {que_options:"tooltip", selected: false}
                ],
                ans : "tooltip",
                explanation:"WebKit includes various values like checkbox, button, button-level, menulist, scrollbarbutton-up, listitem, scrollbarbutton-left, caret, textfield, textarea, searchfield, searchfield-decoration, slider-vertical, slider-horizontal, scrollbargripper-horizontal etc."
            },
            {
                queno:"que_7",
                que : "7) Which is not a Mozilla value?",
                options : [
                    {que_options:"caret" , selected: false},
                    {que_options:"resizer", selected: false},
                    {que_options:"listbox", selected: false},
                    {que_options:"scrollbar", selected: false}
                ],
                ans : "caret",
                explanation:"Mozilla includes many values like menulist, radio, scrollbar, dialog, listbox, scrollbarbutton-down, scrollbar, resizer, checkbox, scrollbarbutton-up, separator, toolbar, toolbox, statusbar, separator, toolbarbutton, window, treetwisty, treeview etc."
            },
            {
                queno:"que_8",
                que : "8) Which is not the property of CSS box model?",
                options : [
                    {que_options:"width" , selected: false},
                    {que_options:"height", selected: false},
                    {que_options:"margin", selected: false},
                    {que_options:"color", selected: false}
                ],
                ans : "color",
                explanation:"CSS box model include height, width, padding, margin and border. All text-fields have complete support for every property related to CSS box model. Browser relies on system default styles when displaying these widgets."
            },
        ]
    },
    {
        _id:"css6666",
        CategoryName:"CSS",
        CategoryType:"Properties",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following property sets in a shorthand form any or all background properties?",
                options : [
                    {que_options:"font" , selected: false},
                    {que_options:"background", selected: false},
                    {que_options:"background-color", selected: false},
                    {que_options:"background-position", selected: false}
                ],
                ans : "background",
                explanation:"Syntax :- background: background-color background-image background-repeat background-attachment background- position;"
            },
            {
                queno:"que_2",
                que : "2) Which of the following property defines whether table cell borders are connected or separate?",
                options : [
                    {que_options:"border-style" , selected: false},
                    {que_options:"border-collapse", selected: false},
                    {que_options:"border-color", selected: false},
                    {que_options:"border-bottom-width", selected: false}
                ],
                ans : "border-collapse",
                explanation:"Syntax: border-collapse: collapse | separate | inherit"
            },
            {
                queno:"que_3",
                que : "3) Which of the following property defines the style for the right border of an element?",
                options : [
                    {que_options:"border-left" , selected: false},
                    {que_options:"border-right", selected: false},
                    {que_options:"border-right-style", selected: false},
                    {que_options:"border-style", selected: false}
                ],
                ans : "border-right-style",
                explanation:"Syntax:border-right-style: dashed | dotted | double | groove | hidden | inset | inherit | none | outset | ridge | solid"
            },
            {
                queno:"que_4",
                que : "4) Which of the following property defines the visual style of up to four different sides of a border?",
                options : [
                    {que_options:"border-width" , selected: false},
                    {que_options:"border-top", selected: false},
                    {que_options:"border", selected: false},
                    {que_options:"border-style", selected: false}
                ],
                ans : "border-style",
                explanation:"Syntax: border-style: style [ style style style ]"
            },
            {
                queno:"que_5",
                que : "5) Which of the following property sets the coordinates of the clipping shape that exposes or hides the content of absolutely positioned elements?",
                options : [
                    {que_options:"clip" , selected: false},
                    {que_options:"clamp", selected: false},
                    {que_options:"clip-wekit", selected: false},
                    {que_options:"clamp-webkit", selected: false}
                ],
                ans : "clamp",
                explanation:"Syntax: clip: rect(coordinates) | auto | inherit"
            },
            {
                queno:"que_6",
                que : "6) Which of the following property generates content in a document and is used with the :before and :after pseudo-elements?",
                options : [
                    {que_options:"text" , selected: false},
                    {que_options:"content", selected: false},
                    {que_options:"contents", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "contents",
                explanation:"Syntax: content: normal | none | string"
            },
            {
                queno:"que_7",
                que : "7) Which of the following property controls CSS counter values?",
                options : [
                    {que_options:"counter" , selected: false},
                    {que_options:"counter-increment", selected: false},
                    {que_options:"counter-decrement", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "counter-increment",
                explanation:"Syntax: counter-increment: counter-name1 [integer] ... counter-nameN [integer] | none | inherit"
            },
            {
                queno:"que_8",
                que : "8) Which of the following property determines how the cursor displays when passed over the affected element?",
                options : [
                    {que_options:"mouse" , selected: false},
                    {que_options:"cursor", selected: false},
                    {que_options:"click", selected: false},
                    {que_options:"focus", selected: false}
                ],
                ans : "cursor",
                explanation:"Syntax: cursor: url(address of cursor file)"
            },
        ]
    },
    {
        _id:"css7777",
        CategoryName:"CSS",
        CategoryType:"border",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following CSS property defines the different properties of all four sides of an element’s border in a single declaration?",
                options : [
                    {que_options:"border" , selected: false},
                    {que_options:"padding", selected: false},
                    {que_options:"border-collapse", selected: false},
                    {que_options:"border-width", selected: false}
                ],
                ans : "border-width",
                explanation:"The border-width property sets the width of an element’s four borders. This property can have from one to four values."
            },
            {
                queno:"que_2",
                que : "2) Identify the CSS property defining bottom-left corner shape of the border?",
                options : [
                    {que_options:"border-radius" , selected: false},
                    {que_options:"border-corner-radius", selected: false},
                    {que_options:"border-bottom-left-radius", selected: false},
                    {que_options:"border-left-radius", selected: false}
                ],
                ans : "border-bottom-left-radius",
                explanation:"CSS3 border-radius property allows you can give any element “rounded corners."
            },
            {
                queno:"que_3",
                que : "3) Select the CSS property that sets the width of an element’s bottom border?",
                options : [
                    {que_options:"border-width" , selected: false},
                    {que_options:"border-bottom", selected: false},
                    {que_options:"border-width-down", selected: false},
                    {que_options:"border-bottom-width", selected: false}
                ],
                ans : "border-bottom-width",
                explanation:"The border-bottom-width CSS property sets the width of the bottom border of a box."
            },
            {
                queno:"que_4",
                que : "4) Which of the following CSS property border-color property sets the color of an element’s four borders?",
                options : [
                    {que_options:"border-background" , selected: false},
                    {que_options:"border-background-color", selected: false},
                    {que_options:"border-color", selected: false},
                    {que_options:"all of the mentioned", selected: false}
                ],
                ans : "border-color",
                explanation:"The border-color property sets the color of an element’s four borders. This property can have from one to four values."
            },
            {
                queno:"que_5",
                que : "5) Choose the CSS property that can be used for collapsing the borders between table cells?",
                options : [
                    {que_options:"border" , selected: false},
                    {que_options:"collapse-border", selected: false},
                    {que_options:"border-collapse", selected: false},
                    {que_options:"border-cell", selected: false}
                ],
                ans : "border-collapse",
                explanation:"The border-collapse property sets whether the table borders are collapsed into a single border or detached as in standard HTML."
            },
            {
                queno:"que_6",
                que : "6) Which CSS property can be used to set the image as border instead of the border style?",
                options : [
                    {que_options:"background-image" , selected: false},
                    {que_options:"border-image", selected: false},
                    {que_options:"background-image-source", selected: false},
                    {que_options:"border-image-source", selected: false}
                ],
                ans : "border-image-source",
                explanation:"The border-image-source property specifies the path to the image to be used as a border (instead of the normal border around an element)."
            },
            {
                queno:"que_7",
                que : "7) In how many way border-image-width CSS property can be defined?",
                options : [
                    {que_options:"4" , selected: false},
                    {que_options:"6", selected: false},
                    {que_options:"8", selected: false},
                    {que_options:"9", selected: false}
                ],
                ans : "9",
                explanation:"The border-image-width CSS property defines the offset to use for dividing the border image in nine parts, the top-left corner, central top edge, top-right-corner, central right edge, bottom-right corner, central bottom edge, bottom-left corner, and central right edge."
            },
            {
                queno:"que_8",
                que : "8) Which of the following is not an appropriate value for border-collapse?",
                options : [
                    {que_options:"all" , selected: false},
                    {que_options:"collapse", selected: false},
                    {que_options:"inherit", selected: false},
                    {que_options:"separate", selected: false}
                ],
                ans : "all",
                explanation:"Except option a, all other values can be set to border collapse CSS property."
            },
        ]
    },
    {
        _id:"css8888",
        CategoryName:"CSS",
        CategoryType:"Lists and Navigation Menus",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following property sets list-style-type, list-style-position, and liststyle-image?",
                options : [
                    {que_options:"style" , selected: false},
                    {que_options:"list-style", selected: false},
                    {que_options:"menu-style", selected: false},
                    {que_options:"img-style", selected: false}
                ],
                ans : "list-style",
                explanation:"Syntax: list-style: list-style-type | list-style-position | list-style-image"
            },
            {
                queno:"que_2",
                que : "2) Which of the following property assigns a graphic image to a list item?",
                options : [
                    {que_options:"list-image-style" , selected: false},
                    {que_options:"list-style-image", selected: false},
                    {que_options:"list-image", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "list-style-image",
                explanation:"Syntax: list-style-image: url(url of image) | none"
            },
            {
                queno:"que_3",
                que : "3) Which of the following property specifies whether the labels for an element’s list items are positioned inside or outside the “box” defined by the listed item?",
                options : [
                    {que_options:"list-style" , selected: false},
                    {que_options:"list-position", selected: false},
                    {que_options:"list-style-position", selected: false},
                    {que_options:"list-position-style", selected: false}
                ],
                ans : "list-style-position",
                explanation:"Syntax: list-style-position: inside | outside | inherit"
            },
            {
                queno:"que_4",
                que : "4) Which of the following property defines labels for a list of items?",
                options : [
                    {que_options:"list-shape" , selected: false},
                    {que_options:"list-style", selected: false},
                    {que_options:"list-type", selected: false},
                    {que_options:"list-style-type", selected: false}
                ],
                ans : "list-style-type",
                explanation:"Syntax: list-style-type: disc | circle | square | decimal"
            },
            {
                queno:"que_5",
                que : "5) Which of the following property defines in a shorthand form the width, style, and color for all four sides of an element’s border?",
                options : [
                    {que_options:"border" , selected: false},
                    {que_options:"border-style", selected: false},
                    {que_options:"border-color", selected: false},
                    {que_options:"border-all", selected: false}
                ],
                ans : "border",
                explanation:"Example: div {border: 2px double red;}"
            },
            {
                queno:"que_6",
                que : "6) Which of the following property defines in a shorthand form the width, style, and color for the left border of an element?",
                options : [
                    {que_options:"border" , selected: false},
                    {que_options:"border-style", selected: false},
                    {que_options:"border-left", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "border-style",
                explanation:"Syntax: border-left: border-width border-style border-color;"
            },
            {
                queno:"que_7",
                que : "7) Which of the following property is used to round border corners?",
                options : [
                    {que_options:"border-corner" , selected: false},
                    {que_options:"border-round", selected: false},
                    {que_options:"border-radius", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "border-radius",
                explanation:"Syntax: border-radius: horizontal-radius vertical-radius"
            },
            {
                queno:"que_8",
                que : "8) Which of the following property influences the horizontal alignment of an element, making it “float” toward the left or right margin of its containing element?",
                options : [
                    {que_options:"float" , selected: false},
                    {que_options:"float-left", selected: false},
                    {que_options:"float-right", selected: false},
                    {que_options:"float-align", selected: false}
                ],
                ans : "float-align",
                explanation:"Syntax: float: left | right | none | inherit;"
            },
        ]
    },
    {
        _id:"css9999",
        CategoryName:"CSS",
        CategoryType:"Positioning of Elements",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following CSS Property controls how an element is positioned?",
                options : [
                    {que_options:"position" , selected: false},
                    {que_options:"set", selected: false},
                    {que_options:"static", selected: false},
                    {que_options:"fix", selected: false}
                ],
                ans : "position",
                explanation:"Controls how an element is positioned. When set to absolute or fixed, the element is removed completely from the normal flow of the document. When set to relative, the element is moved relative to its position in the normal flow, but a space is left where it would normally have been. The default value, static, means the element remains in the normal flow and is not positioned."
            }, 
            {
                queno:"que_2",
                que : "2) Which of the following CSS Property specifies the top offset of a positioned element?",
                options : [
                    {que_options:"top" , selected: false},
                    {que_options:"up", selected: false},
                    {que_options:"reverse", selected: false},
                    {que_options:"fix", selected: false}
                ],
                ans : "top",
                explanation:"Self-explainatory."
            },
            {
                queno:"que_3",
                que : "3) Which of the following CSS Property Specifies the left offset of a positioned element?",
                options : [
                    {que_options:"right" , selected: false},
                    {que_options:"left", selected: false},
                    {que_options:"bottom", selected: false},
                    {que_options:"up", selected: false}
                ],
                ans : "left",
                explanation:"Self-explainatory."
            },
            {
                queno:"que_4",
                que : "4) Which of the following CSS Property sets the stacking order of positioned elements?",
                options : [
                    {que_options:"x-index" , selected: false},
                    {que_options:"y-index", selected: false},
                    {que_options:"z-index", selected: false},
                    {que_options:"all of the mentioned", selected: false}
                ],
                ans : "z-index",
                explanation:"Self-explainatory."
            },
            {
                queno:"que_5",
                que : "5) Which of the following CSS Property Defines the area of an absolutely positioned element that remains visible?",
                options : [
                    {que_options:"clamp" , selected: false},
                    {que_options:"clip", selected: false},
                    {que_options:"visibility", selected: false},
                    {que_options:"static", selected: false}
                ],
                ans : "clip",
                explanation:"Self-explainatory."
            },
            {
                queno:"que_6",
                que : "6) Which of the following CSS Property specifies whether the labels for an element’s list items are positioned inside or outside the “box” defined by the listed item?",
                options : [
                    {que_options:"list-style" , selected: false},
                    {que_options:"list-position", selected: false},
                    {que_options:"list-style-position", selected: false},
                    {que_options:"all of the mentioned", selected: false}
                ],
                ans : "list-style-position",
                explanation:"Syntax: list-style-position: inside | outside"
            },
            {
                queno:"que_7",
                que : "7) Which of the following CSS Property specifies the position of the mask ?",
                options : [
                    {que_options:"mask" , selected: false},
                    {que_options:"mask-position", selected: false},
                    {que_options:"mask-origin", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "mask-position",
                explanation:"Syntax: mask-position: xpos ypos."
            },
            {
                queno:"que_8",
                que : "8) Which of the following CSS Property specifies the x-coordinate in the position of the mask?",
                options : [
                    {que_options:"mask-x" , selected: false},
                    {que_options:"mask-x-origin", selected: false},
                    {que_options:"mask-position-x", selected: false},
                    {que_options:"mask-origin-x", selected: false}
                ],
                ans : "mask-position-x",
                explanation:"Syntax: mask-position-x: length | percentage | left | center | right"
            },
        ]
    },
    {
        _id:"css1010",
        CategoryName:"CSS",
        CategoryType:"Styling Tables",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following element is used within the table element to define a caption?",
                options : [
                    {que_options:"<tablecaption>" , selected: false},
                    {que_options:"<caption>", selected: false},
                    {que_options:"<table-cap>", selected: false},
                    {que_options:"<table-caption>", selected: false}
                ],
                ans : "<caption>",
                explanation:"None"
            }, 
            {
                queno:"que_2",
                que : "2) Which of the following property is used to specify table borders in CSS?",
                options : [
                    {que_options:"table" , selected: false},
                    {que_options:"border", selected: false},
                    {que_options:"table:border", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "border",
                explanation:"Example: table{border: 7px solid black;}"
            },
            {
                queno:"que_3",
                que : "3) Which of the following property sets whether the table borders are collapsed into a single border or separated:?",
                options : [
                    {que_options:"border" , selected: false},
                    {que_options:"border-collapse", selected: false},
                    {que_options:"collapse", selected: false},
                    {que_options:"table-border", selected: false}
                ],
                ans : "border-collapse",
                explanation:"Example: table{ border-collapse: collapse;}"
            },
            {
                queno:"que_4",
                que : "4) Which of the following property is used to change the width of table? ",
                options : [
                    {que_options:"width" , selected: false},
                    {que_options:"table", selected: false},
                    {que_options:"table-width", selected: false},
                    {que_options:"resize", selected: false}
                ],
                ans : "width",
                explanation:"Example: table{width: 23px;}"
            },
            {
                queno:"que_5",
                que : "5) Which of the following property sets the vertical alignment? ",
                options : [
                    {que_options:"align" , selected: false},
                    {que_options:"vertical", selected: false},
                    {que_options:"vertical-align", selected: false},
                    {que_options:"vertical-alignment", selected: false}
                ],
                ans : "vertical",
                explanation:"Example: table{vertical-align: top;}"
            },
            {
                queno:"que_6",
                que : "6) Which of the following property is used to control the space between the border and content in a table? ",
                options : [
                    {que_options:"border" , selected: false},
                    {que_options:"margin", selected: false},
                    {que_options:"padding", selected: false},
                    {que_options:"resize", selected: false}
                ],
                ans : "padding",
                explanation:"Example: table{border: 4px solid black;}"
            },
            {
                queno:"que_7",
                que : "7) Which of the following property is used to change the background in a table ?",
                options : [
                    {que_options:"table-background" , selected: false},
                    {que_options:"background", selected: false},
                    {que_options:"color", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "background",
                explanation:"None"
            },
            {
                queno:"que_8",
                que : "8) Which of the following property is used to change the height of a table?",
                options : [
                    {que_options:"height" , selected: false},
                    {que_options:"table-height", selected: false},
                    {que_options:"resize", selected: false},
                    {que_options:"position-y", selected: false}
                ],
                ans : "height",
                explanation:"Example: table{height: 45%;}"
            },
        ]
    },
    {
        _id:"css101101",
        CategoryName:"CSS",
        CategoryType:"CSS Functions",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following element is used by the filter property to blur the images?",
                options : [
                    {que_options:"opaque()" , selected: false},
                    {que_options:"scatter()", selected: false},
                    {que_options:"blur()", selected: false},
                    {que_options:"all of the mentioned", selected: false}
                ],
                ans : "blur()",
                explanation:"Blurs an element, for use by the filter property. Accepts a distance measurement within which pixels are randomly scattered. A value of 0 leaves the image as is."
            }, 
            {
                queno:"que_2",
                que : "2) Which of the following function adjust the brightness of an element’s color, for use by the filter property?",
                options : [
                    {que_options:"contrast()" , selected: false},
                    {que_options:"dark()", selected: false},
                    {que_options:"light()", selected: false},
                    {que_options:"brightness()", selected: false}
                ],
                ans : "brightness()",
                explanation:"A value of 100% or decimal value of 1 leaves the image as is, while 0 produces black. Increasing the value from 1 or 100% brightens pixels from their original values."
            },
            {
                queno:"que_3",
                que : "3) Which of the following function adjusts the difference between light and dark values, for use by the filter property?",
                options : [
                    {que_options:"contrast()" , selected: false},
                    {que_options:"dark()", selected: false},
                    {que_options:"light()", selected: false},
                    {que_options:"brightness()", selected: false}
                ],
                ans : "contrast()",
                explanation:"A value of 100% or a decimal value of 1 leaves the image as is, while 0 results in black. Increasing the value past 1 or 100% produces more dramatically stratified areas of light and dark."
            }, 
            {
                queno:"que_4",
                que : "4) Which of the following function with filter property to create your own sophisticated effects on DOM elements?",
                options : [
                    {que_options:"create()" , selected: false},
                    {que_options:"DOM()", selected: false},
                    {que_options:"custom()", selected: false},
                    {que_options:"none of the mentioned", selected: false}
                ],
                ans : "contrast()",
                explanation:"A value of 100% or a decimal value of 1 leaves the image as is, while 0 results in black. Increasing the value past 1 or 100% produces more dramatically stratified areas of light and dark."
            }, 
            {
                queno:"que_5",
                que : "5) Which of the following function flips an element’s colors, for use by the filter property?",
                options : [
                    {que_options:"image()" , selected: false},
                    {que_options:"flip()", selected: false},
                    {que_options:"invert()", selected: false},
                    {que_options:"contrast()", selected: false}
                ],
                ans : "invert()",
                explanation:"A decimal value between 0 and 1 or percentage up to 100% controls the extent of the color-negative effect, with 0.5 or 50% producing gray."
            },
            {
                queno:"que_6",
                que : "6) Which of the following function defines a linear gradient as a CSS image?",
                options : [
                    {que_options:"grayscale()" , selected: false},
                    {que_options:"gradient()", selected: false},
                    {que_options:"image()", selected: false},
                    {que_options:"linear-gradient()", selected: false}
                ],
                ans :"linear-gradient()",
                explanation:"None"
            },
            {
                queno:"que_7",
                que : "7) Which of the following function two dimensional transformation in matrix format?",
                options : [
                    {que_options:"matrix()" , selected: false},
                    {que_options:"matrix2d()", selected: false},
                    {que_options:"matrix3d()", selected: false},
                    {que_options:"perspective", selected: false}
                ],
                ans :"matrix()",
                explanation:"None"
            },
            {
                queno:"que_8",
                que : "8) Which of the following function apply a sepia tinge to an element’s color, typical of old photographs, for use by the filter property?",
                options : [
                    {que_options:"grayscale()" , selected: false},
                    {que_options:"sepia()", selected: false},
                    {que_options:"contrast()", selected: false},
                    {que_options:"brightness()", selected: false}
                ],
                ans :"sepia()",
                explanation:"None"
            },
        ]
    },
    {
        _id:"css202202",
        CategoryName:"CSS",
        CategoryType:"Unit , colors and files",
        Desc:"",
        Total:0,
        Attempt:false,
        Quiz_Set : [
            {
                queno:"que_1",
                que : "1) Which of the following is not an Absolute Unit?",
                options : [
                    {que_options:"px" , selected: false},
                    {que_options:"em", selected: false},
                    {que_options:"pt", selected: false},
                    {que_options:"mm", selected: false}
                ],
                ans : "em",
                explanation:"em is a Relative Unit"
            },
            {
                queno:"que_2",
                que : "2) Which of the following unit represent the viewport’s width?",
                options : [
                    {que_options:"vh" , selected: false},
                    {que_options:"vmin", selected: false},
                    {que_options:"vw", selected: false},
                    {que_options:"ch", selected: false}
                ],
                ans : "vw",
                explanation:"Self-explainatory."
            },
            {
                queno:"que_3",
                que : "3) Which of the following property sets in a shorthand form any or all background properties?",
                options : [
                    {que_options:"color" , selected: false},
                    {que_options:"wrap", selected: false},
                    {que_options:"background", selected: false},
                    {que_options:"all of the mentioned", selected: false}
                ],
                ans : "background",
                explanation:"Syntax: background: background-color"
            },  
            {
                queno:"que_4",
                que : "4) Which of the following is not a attribute of the audio element?",
                options : [
                    {que_options:"controls" , selected: false},
                    {que_options:"src", selected: false},
                    {que_options:"check", selected: false},
                    {que_options:"loop", selected: false}
                ],
                ans : "check",
                explanation:"Self-explainatory."
            },
            {
                queno:"que_5",
                que : "5) Which of the following element is used to specify multiple media resources for media elements like audio and video?",
                options : [
                    {que_options:"<source>" , selected: false},
                    {que_options:"<link>", selected: false},
                    {que_options:"<script>", selected: false},
                    {que_options:"<src>", selected: false}
                ],
                ans : "<source>",
                explanation:"Self-explainatory."
            },  
            {
                queno:"que_6",
                que : "6) Which of the following Protocol enables a hyperlink to access a file on the local file system?",
                options : [
                    {que_options:"https" , selected: false},
                    {que_options:"ftp", selected: false},
                    {que_options:"file", selected: false},
                    {que_options:"telnet", selected: false}
                ],
                ans : "file",
                explanation:"Self-explainatory."
            },
            {
                queno:"que_7",
                que : "7) Which of the following element is used for linking a External Files to the html page?",
                options : [
                    {que_options:"<script>" , selected: false},
                    {que_options:"<style>", selected: false},
                    {que_options:"<link>", selected: false},
                    {que_options:"all of the above", selected: false}
                ],
                ans : "<link>",
                explanation:"Self-explainatory."
            },
            {
                queno:"que_8",
                que : "8) Which of the following attribute specifies the URL of the linked resource?",
                options : [
                    {que_options:"src" , selected: false},
                    {que_options:"link", selected: false},
                    {que_options:"rel", selected: false},
                    {que_options:"href", selected: false}
                ],
                ans : "href",
                explanation:"href attribute specifies the URL of the linked resource. A URL might be absolute or relative."
            },
        ]
    },
]


export default {QuizStack}