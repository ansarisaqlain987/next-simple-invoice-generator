'use client'
type SignOutProps = {
    onSignOut: () => Promise<void>;
};

const SignOut = ({ onSignOut }: SignOutProps) => {
    return (
        <button
            onClick={() => {
                onSignOut();
            }}
        >
            Sign Out
        </button>
    );
};

export default SignOut