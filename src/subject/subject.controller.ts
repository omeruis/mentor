import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InterfacePostSubject, InterfaceSubject } from './subject';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  findAll(): InterfaceSubject[] {
    return this.subjectService.findAll();
  }

  @Post()
  addSubject(@Body() subject: InterfacePostSubject): InterfaceSubject[] {
    return this.subjectService.createNewSubject(subject);
  }

  @Get(':id')
  findOneById(@Param('id') id: string): InterfaceSubject {
    return this.subjectService.findOneById(+id);
  }
}
