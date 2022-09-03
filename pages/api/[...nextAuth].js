import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";



const options = {
    provider: [
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                email: {label: 'Email', type: 'text', placeholder: ' Enter your email address'},
                password: {label: 'Password', type: 'password', placeholder: ' Enter your password'}
            },

            async authorize(credentials){
                const payload = {
                    email: credentials.email,
                    password: credentials.password
                }
            const res = await fetch('https://localhost:8055/auth/login', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'application/json', 'Accept languages': 'en-Us'},
            })

                const user = await res.json();

                if(!res.ok){
                    throw new Error('Username or password incorrect')
                }

                if(res.ok && user){
                    return user
                }
            
                return null

            },
        })
    ],  

    session:{
        jwt:true,
    },

    jwt: {
        secret: 'NEXT_AUTH_SECRET'
    },

    callbacks:{
        async jwt({token, user, account}){
            
            if(account && user){
                return {...token, accessToken: user.data.access_token, refreshToken: user.data.refresh_token}
            }
           
            return token
        },

        async session({session, token}){
            session.user.accessToken = token.accessToken,
            session.user.refreshToken = token.refreshToken

            return session
        },
       
    },

   /* pages:{
        signin: '/sign-in'
   }
   */
}

export default (req, res) => NextAuth(req, res, options)