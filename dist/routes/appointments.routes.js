"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const date_fns_1 = require("date-fns");
const typeorm_1 = require("typeorm");
const AppointmentsRepository_1 = __importDefault(require("../repositories/AppointmentsRepository"));
const CreateAppointmentService_1 = __importDefault(require("../services/CreateAppointmentService"));
const appointmentsRouter = express_1.Router();
appointmentsRouter.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentsRepository = typeorm_1.getCustomRepository(AppointmentsRepository_1.default);
    const appointmentsList = yield appointmentsRepository.find();
    return response.json(appointmentsList);
}));
appointmentsRouter.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { provider, date } = request.body;
        const parsedDate = date_fns_1.parseISO(date);
        const createAppointment = new CreateAppointmentService_1.default();
        const appoitment = yield createAppointment.execute({
            provider,
            date: parsedDate,
        });
        return response.json(appoitment);
    }
    catch (e) {
        return response.status(400).json({ message: e.message });
    }
}));
exports.default = appointmentsRouter;
