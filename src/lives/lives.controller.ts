import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Live } from '../lives/lives.entity';
import { LivesService } from '../lives/lives.service';

@Controller('maratona')
export class LivesController {
    constructor(private livesService: LivesService) { }

    @Get()
    async lives(): Promise<string[]> {
        const lives = await  this.livesService.findAll()
        return lives.map(live => live.name);
    }

    @Post('create')
    async create(@Body() livesData: Live): Promise<any> {
        return this.livesService.create(livesData);
    }

    @Delete('delete/:id')
    async delete(@Param('id')id):Promise<any>{
        return this.livesService.delete(id)
    }

    @Put('update/:id')
    async update(@Param('id')id, @Body()livesData: Live): Promise<any> {
        livesData.id = Number(id);
        console.log('Update #' + livesData.id)
        return this.livesService.update(livesData);
    }  

}
