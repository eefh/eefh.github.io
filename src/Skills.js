import React from 'react';
import Skill from './Skill';
const Skills = () =>  {
    return (
        <div className='Skills'>
            <h2>My Skills</h2>
            <hr></hr>
            <div className='skills-content'>
                <Skill title='Javascript' desc='Also ECMAscript'source='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png'/>
                <Skill title='React' desc='Front-end framework of choice'source='https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg'/>
                <Skill title='Node.js' desc='For back-end development'source='https://ih1.redbubble.net/image.1637717834.1604/aps,504x498,small,transparent-pad,600x600,f8f8f8.u1.jpg'/>
                <Skill title='Git' desc='And Github'source='https://www.influxdata.com/wp-content/uploads/GitHub-logo.jpg'/>
                <Skill title='Express.js' desc='Backend and apis'source='https://miro.medium.com/max/1400/1*HkM78Z1G5UKqQNCHwBHRfA.png'/>
                <Skill title='Redux' desc='Powerful with React'source='https://codein.software/img/redux.jpg'/>
                <Skill title='Bash' desc='Useful terminal and scripting'source='https://opensource.com/sites/default/files/lead-images/bash_command_line.png'/>
                <Skill title='MongoDB' desc='My choice for databases'source='https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB'/>
                <Skill title='SQL' desc='Description'source='https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777046/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png'/>
                <Skill title='PostgreSQL' desc='Description'source='https://www.kindpng.com/picc/m/394-3944547_postgresql-logo-png-transparent-png.png'/>
                <Skill title='Linux' desc='My work OS'source='https://bloximages.newyork1.vip.townnews.com/redandblack.com/content/tncms/assets/v3/editorial/4/59/45940eb2-5403-11e9-a843-db0e4491cc90/5ca13d8453042.image.jpg'/>
                <Skill title='C++' desc='My first programming language'source='https://www.nicepng.com/png/detail/981-9813175_c-logo-c-programming-language-logo.png'/>
                <Skill title='Lua' desc='Used to make Pico 8 games'source='https://cdn.activestate.com/wp-content/uploads/2016/11/Lua-not-your-average-scripting-language-blog-hero.jpg'/>
                <Skill title='HTML' desc='Yup.'source='https://media.istockphoto.com/vectors/code-programming-icon-vector-isolated-contour-symbol-illustration-vector-id1206833607?k=20&m=1206833607&s=612x612&w=0&h=vtjkYUw56E8Y7WYGYrt0nZTcGzjA1VTfQcn6PyJDWyU='/>
                <Skill title='CSS' desc='Amazing.'source='https://www.codespot.org/assets/css.jpg'/>
            </div>
        </div>
    );
}

export default Skills