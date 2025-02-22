import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login with email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "saloni@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username);
        console.log(password);    

        // Mock user data
        const user = {
          name: "Saloni",
          id: "1",
          username: "saloniatole@gmail.com"
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    }),

    GoogleProvider({
      clientId: "ASASS",
      clientSecret: "Asd"
    })

  ]
  
});

//  Use named exports for GET and POST methods
export { handler as GET, handler as POST };
