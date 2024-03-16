export function getUniqueID (str: string, ...properties: (string | number)[]): string {
    if (!str) {
        throw new Error('String should not be null, undefined or empty.');
    }
    
    const uniqueID = btoa(str);
    if (!properties || properties.length === 0) {
        return uniqueID;
    }
    
    return properties.reduce<string>((acc, cur): string => {
        const stringProperty = typeof cur === 'string' ? cur : `${cur}`;
        
        if (!stringProperty) {
            return '';
        }
        
        return acc + btoa(stringProperty);
    }, uniqueID);
}