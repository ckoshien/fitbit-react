import document from 'document'

export const GRotate = id => {
    const el = document.getElementById( id );
    
    return angle => {
        el.groupTransform.rotate.angle = angle;
    }
}

export const Number = (id) => {
    const int = document.getElementById( id + '-int' )
    return num => {
        int.text = num | 0;
    }
}

export const Masked = (id) => {
    const elm = document.getElementById( id  )
    return angle => {
        elm.sweepAngle = angle | 0;
    }
}