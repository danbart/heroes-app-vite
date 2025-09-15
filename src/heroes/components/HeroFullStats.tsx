import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Brain, Gauge, Shield, Zap } from 'lucide-react'
import type { Hero } from '../interfaces/hero.interface'

interface HeroFullStatsProps {
  superheroData: Hero
}

export const HeroFullStats = ({ superheroData }: HeroFullStatsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Strength */}
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Fuerza</h3>
            <div className="text-3xl font-bold text-red-600 mb-2">{superheroData?.strength}</div>
            <Progress value={superheroData?.strength} className="h-2" />
          </CardContent>
        </Card>

        {/* Intelligence */}
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Inteligencia</h3>
            <div className="text-3xl font-bold text-purple-600 mb-2">{superheroData?.intelligence}</div>
            <Progress value={superheroData?.intelligence} className="h-2" />
          </CardContent>
        </Card>

        {/* Speed */}
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Gauge className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Velocidad</h3>
            <div className="text-3xl font-bold text-yellow-600 mb-2">{superheroData?.speed}</div>
            <Progress value={superheroData?.speed} className="h-2" />
          </CardContent>
        </Card>

        {/* Durability */}
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Resistencia</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">{superheroData?.durability}</div>
            <Progress value={superheroData?.durability} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Power Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Comparación de Habilidades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-medium">Fuerza</div>
              <div className="flex-1">
                <Progress value={superheroData?.strength} className="h-4" />
              </div>
              <div className="w-12 text-right font-bold">{superheroData?.strength}/100</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-medium">Inteligencia</div>
              <div className="flex-1">
                <Progress value={superheroData?.intelligence} className="h-4" />
              </div>
              <div className="w-12 text-right font-bold">{superheroData?.intelligence}/100</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-medium">Velocidad</div>
              <div className="flex-1">
                <Progress value={superheroData?.speed} className="h-4" />
              </div>
              <div className="w-12 text-right font-bold">{superheroData?.speed}/100</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-medium">Resistencia</div>
              <div className="flex-1">
                <Progress value={superheroData?.durability} className="h-4" />
              </div>
              <div className="w-12 text-right font-bold">{superheroData?.durability}/100</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}


