<template>
  <div 
    :style="{
      width: '1200px',
      height: '630px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#010304',
      position: 'relative',
      overflow: 'hidden',
    }"
  >
    <!-- Grid Background -->
    <div 
      :style="{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }"
    />
    
    <!-- Glow Effect -->
    <div 
      :style="{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '400px',
        height: '400px',
        marginLeft: '-200px',
        marginTop: '-200px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
      }"
    />
    
    <!-- Content -->
    <div 
      :style="{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px',
      }"
    >
      <div 
        :style="{
          fontSize: '24px',
          fontWeight: 500,
          color: '#3b82f6',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          marginBottom: '20px',
        }"
      >
        {{ props.description || 'DevOps & Solution Architect' }}
      </div>
      
      <h1 
        :style="{
          fontSize: '72px',
          fontWeight: 800,
          color: '#ffffff',
          margin: '0 0 30px 0',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          textAlign: 'center',
        }"
      >
        {{ props.title || 'Aboubakar Sidik Faha' }}
      </h1>
      
      <div 
        :style="{
          fontSize: '28px',
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.6)',
          fontFamily: 'monospace',
        }"
      >
        aboubak.art
      </div>
    </div>
    
    <!-- Badge -->
    <div 
      :style="{
        position: 'absolute',
        bottom: '40px',
        right: '40px',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        border: '2px solid rgba(59, 130, 246, 0.5)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '24px',
        color: '#3b82f6',
        fontFamily: 'monospace',
      }"
    >
      ASF
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Aboubakar Sidik Faha'
  },
  description: {
    type: String,
    default: 'DevOps & Solution Architect'
  }
})
</script>
