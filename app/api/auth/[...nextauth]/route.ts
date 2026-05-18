import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Hardcoded dummy user for testing
        const user = { id: "1", name: "Admin", email: "admin@test.com" };

        if (credentials?.email === "admin@test.com" && credentials?.password === "password123") {
          return user;
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/", // Redirects to our custom home page for login
  }
});

export { handler as GET, handler as POST };
