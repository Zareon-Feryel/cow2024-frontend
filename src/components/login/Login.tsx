import { Input } from '../../shadcn/components/ui/input.tsx';
import { TabsContent } from '../../shadcn/components/ui/tabs.tsx';
import { Button } from '../../shadcn/components/ui/button.tsx';
import { Label } from '../../shadcn/components/ui/label.tsx';
import { SignInRequest, UsersRepository } from '../../services/nswag-generated-file.ts';
import { FormEvent, useEffect, useState } from 'react';
import { useToast } from '../../shadcn/components/ui/use-toast.ts';
import RouterKeys from '../../routes/routerKeys.ts';
import { useNavigate } from 'react-router-dom';

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validForm, setValidForm] = useState(false);
    
    const navigate = useNavigate();
    
    const { toast } = useToast();
    
    useEffect(() => {
        setValidForm(email !== '' && password !== '');
    }, [email, password]);
    
    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === '' || password === '') {
            return;
        }
        
        const user = new SignInRequest({
            email: email,
            password: password,
        });
        
        new UsersRepository().signin(user)
        .then(() => navigate('/'))
        .catch(() => toast({
            title: 'Erreur',
            description: 'Les identifiants de connexion sont incorrectes',
            variant: 'destructive',
        }));
    };
    
    return (
        <TabsContent value={RouterKeys.Login}>
            <form onSubmit={handleLogin} className="flex flex-col bg-white gap-4">
                <Label>
                    Email
                    <Input onChange={(e) => setEmail(e.target.value)}/>
                </Label>
                <Label>
                    Mot de passe
                    <Input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </Label>
                <Button type="submit" disabled={!validForm}>Connexion</Button>
            </form>
        </TabsContent>
    );
}