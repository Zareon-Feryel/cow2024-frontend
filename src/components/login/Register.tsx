import { TabsContent } from '../../shadcn/components/ui/tabs.tsx';
import { Input } from '../../shadcn/components/ui/input.tsx';
import { FormEvent, useEffect, useState } from 'react';
import { useToast } from '../../shadcn/components/ui/use-toast.ts';
import { SignUpRequest } from '../../services/nswag-generated-file.ts';
import { Label } from '../../shadcn/components/ui/label.tsx';
import { Button } from '../../shadcn/components/ui/button.tsx';
import RouterKeys from '../../routes/routerKeys.ts';
import { UserRoles } from '../../services/enum/user-roles.ts';
import { Switch } from '../../shadcn/components/ui/switch.tsx';
import { AuthService } from '../../services/services/UsersServices.ts';

export default function Register () {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<UserRoles>(UserRoles.User);
    const [street, setStreet] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    
    const [validForm, setValidForm] = useState(false);
    
    const { toast } = useToast();
    
    useEffect(() => {
        setValidForm(email !== '' && password !== '');
    }, [email, password]);
    
    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === '' || password === '') {
            return;
        }
        
        const user = new SignUpRequest({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role,
            street: street,
            streetNumber: streetNumber,
            zipCode: zipCode,
            city: city,
            country: country,
        });
        
        new AuthService(true).signup(user)
        .then(() => {})
        .catch(() => toast({
            title: 'Erreur',
            description: 'Les identifiants de connexion sont incorrectes',
            variant: 'destructive',
        }));
    };
    
    return (
        <TabsContent value={RouterKeys.Register}>
            <form className="flex flex-col bg-white gap-4" onSubmit={handleRegister}>
                <div className="flex gap-2">
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
                <div className="flex gap-2">
                    <Switch onCheckedChange={(e) => setRole(e ? UserRoles.Maker : UserRoles.User)}/>
                    Êtes-vous un particulier ou un Maker ?
                </div>
                {role === UserRoles.Maker &&
					<>
						<div className="flex gap-2">
							<Label>
								Rue
								<Input onChange={(e) => setStreet(e.target.value)}/>
							</Label>
							<Label>
								N°
								<Input onChange={(e) => setStreetNumber(e.target.value)}/>
							</Label>
						</div>
						<div className="flex gap-2">
							<Label>
								Code postal
								<Input onChange={(e) => setZipCode(e.target.value)}/>
							</Label>
							<Label>
								Ville
								<Input onChange={(e) => setCity(e.target.value)}/>
							</Label>
						</div>
						<Label>
							Pays
							<Input onChange={(e) => setCountry(e.target.value)}/>
						</Label>
					</>
                }
                <Button disabled={!validForm}>{'S\'inscrire'}</Button>
            </form>
        </TabsContent>
    );
}