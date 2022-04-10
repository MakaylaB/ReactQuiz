let AuthContext = React.createContext(null);
function AuthProvider({children}) {

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
let AuthContext = React.createContext(null);
function AuthProvider({children}) {
    
return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
}
