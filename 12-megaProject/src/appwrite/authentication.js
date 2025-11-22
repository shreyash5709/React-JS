import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthenticationService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email, 
                password, 
                name
            );

            if (userAccount) {
                // call another method to login the user after successful account creation
                return this.login({email, password});
            } else { 
                return userAccount;
            }
        } catch (error) {
            throw error;
        }   
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        }
        catch (error) {
            throw error;
        }   
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }   
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error); 
        }
    }
}

const authenticationService = new AuthenticationService();
export default authenticationService;

