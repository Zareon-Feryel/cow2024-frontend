import { TabsContent } from '../../shadcn/components/ui/tabs.tsx';
import { Input } from '../../shadcn/components/ui/input.tsx';

export default function Register () {
    return (
        <TabsContent value="register" className="bg-white w-1/5 gap-4">
            <h3>Register</h3>
            
            <Input></Input>
        </TabsContent>
    );
}