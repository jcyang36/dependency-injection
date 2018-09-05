/* tslint:disable */
import {HeroListComponent} from './hero-list.component';
import {HeroService} from './hero.service';

describe('HeroListComponent',()=>{
  const expectedHeroes= [{name:'A'},{name:'B'},{name:'C'}];
  const mockService=<HeroService> { getHeroes:() => expectedHeroes };

  it('should have heroes when HeroListComponent is created',()=>{
    const component= new HeroListComponent(mockService);
    expect(component.heroes.length).toEqual(expectedHeroes.length);
  })
});
