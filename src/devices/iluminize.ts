import fz from "../converters/fromZigbee";
import tz from "../converters/toZigbee";
import * as exposes from "../lib/exposes";
import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

const e = exposes.presets;
const ea = exposes.access;

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["ZGRC-KEY-005"],
        model: "5144.01",
        vendor: "Iluminize",
        description: "RGB CCT 3 in 1 Remote Controller",
        extend: [m.battery({percentageReporting: false}), m.identify(), m.commandsOnOff(), m.commandsLevelCtrl(), m.commandsColorCtrl()],
    },
    {
        zigbeeModel: ["ZGRC-KEY-001"],
        model: "5144.11",
        vendor: "Iluminize",
        description: "Zigbee 3.0 wall dimmer with switches",
        extend: [m.battery({percentageReporting: false}), m.identify(), m.commandsOnOff(), m.commandsLevelCtrl()],
    },
    {
        zigbeeModel: ["ZGRC-KEY-002"],
        model: "5144.21",
        vendor: "Iluminize",
        description: "Single color wall mounted push button remote",
        extend: [m.battery({percentageReporting: false}), m.identify(), m.commandsOnOff(), m.commandsLevelCtrl(), m.commandsColorCtrl()],
    },
    {
        zigbeeModel: ["5121.10"],
        model: "5121.10",
        vendor: "Iluminize",
        description: "Rotary dimmer with integrated Zigbee 3.0 dimming actuator",
        extend: [m.light({configureReporting: true})],
    },
    {
        zigbeeModel: ["5120.2210"],
        model: "5120.2210",
        vendor: "Iluminize",
        description: "Zigbee 3.0 actuator mini 1x 230V",
        extend: [m.onOff()],
    },
    {
        fingerprint: [{modelID: "511.050"}, {modelID: "RGBWW Lighting", manufacturerName: "Iluminize"}],
        model: "511.050",
        vendor: "Iluminize",
        description: "Zigbee 3.0 LED controller for 5in1 RGB+CCT LEDs",
        extend: [m.light({colorTemp: {range: [155, 450]}, color: true})],
    },
    {
        fingerprint: [
            {modelID: "DIM Lighting", manufacturerName: "Iluminize"},
            {modelID: "DIM Lighting", manufacturerName: "Sunricher"},
        ],
        model: "511.10",
        vendor: "Iluminize",
        description: "Zigbee LED-Controller",
        extend: [m.light()],
    },
    {
        zigbeeModel: ["511.201"],
        model: "511.201",
        vendor: "Iluminize",
        description: "ZigBee 3.0 dimming actuator mini 1x 230V",
        extend: [m.light({configureReporting: true})],
    },
    {
        zigbeeModel: ["511.020"],
        model: "511.020",
        vendor: "Iluminize",
        description: "Zigbee 3.0 LED controller multi 4 - 5A, CCT WW/CW LED",
        extend: [m.light({colorTemp: {range: [155, 450]}})],
    },
    {
        zigbeeModel: ["5120.1100"],
        model: "5120.1100",
        vendor: "Iluminize",
        description: "ZigBee 3.0 dimming actuator mini 1x 230V",
        extend: [m.light({configureReporting: true})],
    },
    {
        zigbeeModel: ["5120.1110"],
        model: "5120.1110",
        vendor: "Iluminize",
        description: "ZigBee 3.0 dimming actuator mini 1x 230V",
        extend: [m.light({configureReporting: true})],
    },
    {
        zigbeeModel: ["5120.2110"],
        model: "5120.2110",
        vendor: "Iluminize",
        description: "ZigBee 3.0 dimming actuator mini 1x 230V",
        extend: [m.light({configureReporting: true})],
    },
    {
        zigbeeModel: ["5123.1110"],
        model: "5123.1110",
        vendor: "Iluminize",
        description: "Zigbee 3.0 controller with adjustable current 250-1500mA, max. 50W / 48V SELV",
        extend: [m.light({configureReporting: true})],
    },
    {
        zigbeeModel: ["511.010"],
        model: "511.010",
        vendor: "Iluminize",
        description: "Zigbee LED-Controller",
        extend: [m.light()],
    },
    {
        zigbeeModel: ["511.012"],
        model: "511.012",
        vendor: "Iluminize",
        description: "Zigbee LED-Controller",
        extend: [m.light()],
    },
    {
        zigbeeModel: ["511.202"],
        model: "511.202",
        vendor: "Iluminize",
        description: "Zigbee 3.0 switch mini 1x230V, 200W/400W",
        extend: [m.onOff()],
    },
    {
        zigbeeModel: ["5120.1200"],
        model: "5120.1200",
        vendor: "Iluminize",
        description: "Zigbee 3.0 switch mini 1x230V with neutral, 200W/400W",
        extend: [m.onOff()],
    },
    {
        zigbeeModel: ["5120.1210"],
        model: "5120.1210",
        vendor: "Iluminize",
        description: "Zigbee 3.0 switch mini 1x230V without neutral, 200W/400W",
        extend: [m.onOff()],
    },
    {
        zigbeeModel: ["5128.10"],
        model: "5128.10",
        vendor: "Iluminize",
        description: "Zigbee 3.0 switch shutter SW with level control",
        fromZigbee: [fz.cover_position_via_brightness, fz.cover_state_via_onoff, fz.cover_position_tilt],
        toZigbee: [tz.cover_state, tz.cover_via_brightness],
        exposes: [e.cover_position()],
        ota: true,
    },
    {
        zigbeeModel: ["ZG2801K2-G1-RGB-CCT-LEAD"],
        model: "511.557",
        vendor: "Iluminize",
        description: "Zigbee 3.0 wall dimmer",
        fromZigbee: [fz.command_off, fz.command_on, fz.command_move_to_color_temp, fz.command_move_to_color],
        toZigbee: [],
        exposes: [e.action(["off", "on", "color_temperature_move", "color_move"])],
    },
    {
        fingerprint: [{modelID: "511.040"}, {modelID: "RGBW-CCT", manufacturerName: "Iluminize"}],
        model: "511.040",
        vendor: "Iluminize",
        description: "ZigBee 3.0 LED-controller, 4 channel 5A, RGBW LED",
        extend: [m.light({colorTemp: {range: undefined}, color: true})],
    },
    {
        zigbeeModel: ["HK-ZD-RGB-A", "5110.40"],
        model: "5110.40",
        vendor: "Iluminize",
        description: "Zigbee 3.0 LED controller multi 5 - 4A,RGB W/CCT LED",
        extend: [m.light({colorTemp: {range: [160, 450]}, color: true})],
    },
    {
        zigbeeModel: ["HK-ZD-RGBCCT-A", "511.000"],
        model: "511.000",
        vendor: "Iluminize",
        whiteLabel: [{vendor: "Sunricher", model: "HK-ZD-RGBCCT-A"}],
        description: "Zigbee 3.0 universal LED-controller, 5 channel, RGBCCT LED",
        extend: [m.light({colorTemp: {range: undefined}, color: true})],
    },
    {
        zigbeeModel: ["ZG2819S-RGBW"],
        model: "511.344",
        vendor: "Iluminize",
        whiteLabel: [{vendor: "Sunricher", model: "ZG2819S-RGBW"}],
        description: "Zigbee handheld remote RGBW 4 channels",
        extend: [
            m.deviceEndpoints({endpoints: {ep1: 1, ep2: 2, ep3: 3, ep4: 4}}),
            m.battery(),
            m.identify(),
            m.commandsOnOff({
                commands: ["on", "off"],
            }),
            m.commandsLevelCtrl({
                commands: ["brightness_move_up", "brightness_move_down", "brightness_stop", "brightness_step_up", "brightness_step_down"],
            }),
            m.commandsColorCtrl({
                commands: ["color_temperature_move", "color_move", "hue_move", "hue_stop"],
            }),
            m.commandsScenes({commands: ["recall"]}),
        ],
        meta: {multiEndpoint: true},
    },
    {
        zigbeeModel: ["511.324"],
        model: "511.324",
        vendor: "Iluminize",
        description: "Zigbee handheld remote CCT 4 channels",
        fromZigbee: [
            fz.battery,
            fz.command_move_to_color,
            fz.command_move_to_color_temp,
            fz.command_move_hue,
            fz.command_step,
            fz.command_recall,
            fz.command_on,
            fz.command_off,
            fz.command_toggle,
            fz.command_stop,
            fz.command_move,
            fz.command_color_loop_set,
            fz.command_ehanced_move_to_hue_and_saturation,
        ],
        exposes: [
            e.battery(),
            e.action([
                "color_move",
                "color_temperature_move",
                "hue_move",
                "brightness_step_up",
                "brightness_step_down",
                "recall_*",
                "on",
                "off",
                "toggle",
                "brightness_stop",
                "brightness_move_up",
                "brightness_move_down",
                "color_loop_set",
                "enhanced_move_to_hue_and_saturation",
                "hue_stop",
            ]),
            e.numeric("action_group", ea.STATE).withDescription("Shows the zigbee2mqtt group bound to the active data point EP(1-4)."),
            e.numeric("action_transition_time", ea.STATE),
            e.numeric("action_step_size", ea.STATE),
            e.numeric("action_rate", ea.STATE),
        ],
        toZigbee: [],
        meta: {multiEndpoint: true},
        endpoint: (device) => {
            return {ep1: 1, ep2: 2, ep3: 3, ep4: 4};
        },
    },
    {
        zigbeeModel: ["ZGRC-TEUR-002"],
        model: "511.541",
        vendor: "Iluminize",
        description: "Zigbee 3.0 wall dimmer RGBW 1 zone",
        fromZigbee: [
            fz.command_recall,
            fz.command_on,
            fz.command_off,
            fz.command_move_to_color,
            fz.command_move_to_color_temp,
            fz.command_move_hue,
            fz.command_step,
            fz.command_move,
            fz.command_stop,
        ],
        toZigbee: [],
        exposes: [
            e.action([
                "recall_*",
                "on",
                "off",
                "color_move",
                "color_temperature_move",
                "hue_move",
                "brightness_step_down",
                "brightness_step_up",
                "brightness_move_down",
                "brightness_move_up",
                "brightness_stop",
            ]),
        ],
    },
    {
        zigbeeModel: ["5112.80"],
        model: "5112.80",
        vendor: "Iluminize",
        description: "Zigbee 3.0 LED-controller 1x 8A",
        extend: [m.light()],
    },
    {
        zigbeeModel: ["ZGRC-TEUR-001"],
        model: "511.544",
        vendor: "Iluminize",
        description: "Zigbee 3.0 wall dimmer RGBW 4 zones",
        fromZigbee: [fz.command_move_to_color, fz.command_move_hue, fz.command_on, fz.command_off, fz.command_move],
        toZigbee: [],
        exposes: [
            e.action([
                "recall_*",
                "on",
                "off",
                "color_move",
                "color_temperature_move",
                "hue_move",
                "brightness_step_down",
                "brightness_step_up",
                "brightness_move_down",
                "brightness_move_up",
                "brightness_stop",
            ]),
        ],
    },
    {
        zigbeeModel: ["ZGRC-TEUR-003"],
        model: "511.524",
        vendor: "Iluminize",
        description: "Zigbee 3.0 wall dimmer CCT 4 zones",
        fromZigbee: [
            fz.command_on,
            fz.command_off,
            fz.command_recall,
            fz.command_move_to_color_temp,
            fz.command_step,
            fz.command_move,
            fz.command_stop,
        ],
        toZigbee: [],
        meta: {multiEndpoint: true},
        exposes: [
            e.action([
                "recall_*",
                "on",
                "off",
                "brightness_step_down",
                "brightness_step_up",
                "brightness_move_down",
                "brightness_move_up",
                "brightness_stop",
                "color_move",
                "color_temperature_move",
                "hue_move",
                "color_loop_set",
                "enhanced_move_to_hue_and_saturation",
                "hue_stop",
            ]),
        ],
    },
];
