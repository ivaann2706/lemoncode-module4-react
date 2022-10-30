import React from 'react';

import { Link, useParams } from 'react-router-dom';

import { AppLayout } from '@/layouts/app.layout';

interface MemberDetailEntity {
    id: string;
    login: string;
    name: string;
    company: string;
    bio: string;
    avatar_url: string;
}

export const GithubDetailScene = () => {
    const [member, setMember] = React.useState<MemberDetailEntity>({
        id: '',
        login: '',
        name: '',
        company: '',
        bio: '',
        avatar_url: '',
    });

    const { login } = useParams();

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then((response) => response.json())
            .then(setMember);
    }, [login]);
    return member ? (
        <AppLayout>
            <div className="detail">
                <div>
                    <h3>{member.name}</h3>
                    <p>id: {member.id}</p>
                    <p>login: {member.login}</p>
                    <p>company: {member.company}</p>
                    <p>bio: {member.bio}</p>
                    <Link to="/github">Go to List</Link>
                </div>
                <div>
                    <img src={member.avatar_url} />
                </div>
            </div>
        </AppLayout>
    ) : (
        <h3>Loading...</h3>
    );
};
