'use client'
type SignInProps = {
    onSignIn: () => Promise<void>;
};

const SignIn = ({ onSignIn }: SignInProps) => {
    return (
        <button
            onClick={() => {
                onSignIn();
            }}
        >
            Sign In
        </button>
    );
};

export default SignIn;