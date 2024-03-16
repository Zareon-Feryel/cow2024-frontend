import { TabsContent } from '../../shadcn/components/ui/tabs.tsx';
import { Input } from '../../shadcn/components/ui/input.tsx';
import { useEffect, useState } from 'react';
import { useToast } from '../../shadcn/components/ui/use-toast.ts';
import { SignUpRequest, UsersRepository } from '../../services/nswag-generated-file.ts';
import { Label } from '../../shadcn/components/ui/label.tsx';
import { Button } from '../../shadcn/components/ui/button.tsx';
import RouterKeys from '../../routes/routerKeys.ts';

export default function Register () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(0);
    
    const [validForm, setValidForm] = useState(false);
    
    const { toast } = useToast();
    
    useEffect(() => {
        setValidForm(email !== '' && password !== '');
    }, [email, password]);
    
    const handleRegister = () => {
        if (email === '' || password === '') {
            return;
        }
        
        const user = new SignUpRequest({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role,
        });
        
        new UsersRepository().signup(user)
        .then(() => {})
        .catch(() => toast({
            title: 'Erreur',
            description: 'Les identifiants de connexion sont incorrectes',
            variant: 'destructive',
        }));
    };
    
    return (
        <TabsContent value={RouterKeys.Register} className="flex flex-col bg-white gap-4">
            <div>
                <Label>
                    Prénom
                    <Input onChange={(e) => setFirstName(e.target.value)}/>
                </Label>
                <Label>
                    Nom
                    <Input onChange={(e) => setLastName(e.target.value)}/>
                </Label>
            </div>
            <Label>
                Email
                <Input onChange={(e) => setEmail(e.target.value)}/>
            </Label>
            <Label>
                Mot de passe
                <Input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </Label>
            <Label>
                Êtes-vous un particulier ou un Maker ?
                <Input onChange={(e) => setRole(+e.target.value)}/>
            </Label>
            <Button disabled={!validForm} onClick={handleRegister}>{'S\'inscrire'}</Button>
        </TabsContent>
    );
}