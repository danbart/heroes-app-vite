import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';
import type { Hero } from '../interfaces/hero.interface';

interface HeroPowersProps {
    superheroData: Hero
}
export const HeroPowers = ({ superheroData }: HeroPowersProps) => {
    return (

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    Superpoderes
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {superheroData?.powers.map((power, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-500 p-2 rounded-full">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium text-blue-900">{power}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
