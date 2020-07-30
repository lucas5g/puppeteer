import dotenv from 'dotenv'
dotenv.config()


export const courses = [
    { name: 'teste', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=81&section=5&singlesec=5' },

    { name: 'biologiaVM1N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=71&section=1&singlesec=1'},
    { name: 'biologiaVM2N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=72&section=1&singlesec=1' },
    { name: 'biologiaVM3N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=73&section=1&notifyeditingon=1' },

    { name: 'espanholVM1N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=62&section=1' },
    { name: 'espanholVM2N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=63&section=1&singlesec=1' },
    { name: 'espanholVM3N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=64&section=1&singlesec=1' },
    
    { name: 'filosofiaVM1N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=78&section=1'},
    { name: 'filosofiaVM2N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=79&section=1&singlesec=1' },
    { name: 'filosofiaVM3N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=80&section=1&singlesec=1'},
    
    { name: 'fisicaVM1N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=65&section=1&singlesec=1'},


    { name: 'geografiaVM2N' , url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=57&section=1'},
    
    { name: 'historioVM3N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=55&section=1&singlesec=1' },

    { name: 'matematicaVM1N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=50&section=1&notifyeditingon=1' },
    { name: 'matematicaVM2N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=51&section=1&singlesec=1' },
    { name: 'matematicaVM3N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=52&section=1&singlesec=1'},


    { name: 'portuguesVM1N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=47&section=1&singlesec=1' },
    { name: 'portuguesVM2N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=48&section=1' },
    { name: 'portuguesVM3N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=49&section=1&notifyeditingon=1' },


    { name: 'quimicaVM1N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=68&section=1&singlesec=1' },
    { name: 'quimicaVM2N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=69&section=1'},
    { name: 'quimicaVM3N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=70&section=1&notifyeditingon=1' },
    
    { name: 'sociologiaVM2N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=76&section=1&singlesec=1'}, 
    { name: 'sociologiaVM3N', url: 'https://meuvicuna.freicarlosvicuna.com.br/course/view.php?id=77&section=1&singlesec=1' },



]


export const diaryDay = {
    Tuesday : [
        'matematicaVM2N',
         'quimicaVM3N', 'fisicaVM1N',
        'portuguesVM3N', 'matematicaVM1N', 'geografiaVM2N'
    ],
    Wednesday: [
        'matematicaVM1N', 'filosofiaVM2N',  'biologiaVM3N',
        'quimicaVM1N', 'biologiaVM2N', 'filosofiaVM3N', 
    ],
    Thursday:[
        'quimicaVM3N', 'filosofiaVM1N', 'matematicaVM2N',
        'biologiaVM1N', 'matematicaVM3N', 'quimicaVM2N'
    ],
    teste : [
        'matematicaVM2N', 'quimicaVM3N', 'fisicaVM1N',
        'portuguesVM3N', 'matematicaVM1N', 'geografiaVM2N'
    ]

}

export const login = {
    email: process.env.Email,
    password: process.env.Password
}